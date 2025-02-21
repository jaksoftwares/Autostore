import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 DELETE: Remove a review (Admin or Review Owner)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const review = await prisma.review.findUnique({
            where: { id: params.id },
            select: { userId: true },
        });

        if (!review) {
            return NextResponse.json({ error: 'Review not found' }, { status: 404 });
        }

        if (decoded.role !== 'ADMIN' && decoded.id !== review.userId) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        await prisma.review.delete({ where: { id: params.id } });

        return NextResponse.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
