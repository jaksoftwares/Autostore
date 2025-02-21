import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch user's wishlist
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

        const wishlist = await prisma.wishlist.findMany({
            where: { userId: decoded.id },
            include: { product: true }
        });

        return NextResponse.json(wishlist);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🟢 POST: Add item to wishlist
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

        const { productId } = await req.json();

        if (!productId) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

        // Check if product exists
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Check if product is already in wishlist
        const existingWishlistItem = await prisma.wishlist.findFirst({
            where: { userId: decoded.id, productId }
        });

        if (existingWishlistItem) {
            return NextResponse.json({ error: 'Product already in wishlist' }, { status: 400 });
        }

        // Add to wishlist
        const wishlistItem = await prisma.wishlist.create({
            data: { userId: decoded.id, productId }
        });

        return NextResponse.json(wishlistItem, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
