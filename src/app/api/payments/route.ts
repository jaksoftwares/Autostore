import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 POST: Initiate Payment
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

        const { orderId, paymentMethod, amount } = await req.json();

        if (!orderId || !paymentMethod || !amount) {
            return NextResponse.json({ error: 'Missing payment details' }, { status: 400 });
        }

        // Check if order exists and belongs to user
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: { user: true } // Ensure order has a user
        });

        if (!order || order.user.id !== decoded.id) {
            return NextResponse.json({ error: 'Order not found or access denied' }, { status: 404 });
        }

        // Simulate a payment transaction
        const payment = await prisma.payment.create({
            data: {
                orderId,
                amount,
                // paymentMethod,
                status: 'PENDING'
            }
        });

        return NextResponse.json(payment, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
