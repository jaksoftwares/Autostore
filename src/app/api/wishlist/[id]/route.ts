import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🔴 DELETE: Remove item from wishlist
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Check if item exists in wishlist
        const wishlistItem = await prisma.wishlist.findUnique({ where: { id: params.id } });
        if (!wishlistItem || wishlistItem.userId !== decoded.id) {
            return NextResponse.json({ error: 'Item not found or access denied' }, { status: 404 });
        }

        await prisma.wishlist.delete({ where: { id: params.id } });

        return NextResponse.json({ message: 'Item removed from wishlist' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
