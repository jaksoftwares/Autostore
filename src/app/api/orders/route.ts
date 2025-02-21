import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch all orders (Admin Only)
export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const orders = await prisma.order.findMany({
            include: { items: { include: { product: true } }, user: true }
        });

        return NextResponse.json(orders);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🟢 POST: Create an order
export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Define expected body structure
        const body: {
            items: { productId: string; quantity: number }[];
            totalPrice: number;
            shippingAddress: string;
            paymentMethod: string;
        } = await req.json();

        const { items, totalPrice, shippingAddress, paymentMethod } = body;

        if (!items || items.length === 0 || !totalPrice || !shippingAddress || !paymentMethod) {
            return NextResponse.json({ error: 'Missing order details' }, { status: 400 });
        }

        // Create order
        const order = await prisma.order.create({
            data: {
                userId: decoded.id,
                totalPrice,
                // shippingAddress,
                // paymentMethod,
                status: 'PENDING',
                items: {
                    create: items.map((item) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        userId: decoded.id
                    }))
                }
            }
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        console.error('Error creating order:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
