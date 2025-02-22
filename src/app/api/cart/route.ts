import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch user's cart
export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const cart = await prisma.cartItem.findMany({
            where: { userId: decoded.id },
            include: { product: true }
        });

        return NextResponse.json(cart);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🟢 POST: Add item to cart
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

        const { productId, quantity } = await req.json();

        if (!productId || quantity <= 0) {
            return NextResponse.json({ error: 'Invalid product or quantity' }, { status: 400 });
        }

        // Check if product exists
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Check if the item is already in the cart
        const existingCartItem = await prisma.cartItem.findFirst({
            where: { userId: decoded.id, productId }
        });

        if (existingCartItem) {
            // Update quantity if item exists
            const updatedCart = await prisma.cartItem.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity }
            });
            return NextResponse.json(updatedCart);
        }

        // Add new item to cart
        const cartItem = await prisma.cartItem.create({
            data: { userId: decoded.id, productId, quantity }
        });

        return NextResponse.json(cartItem, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
