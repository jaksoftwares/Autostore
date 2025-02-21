import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 POST: Add a product review
export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { productId, rating, comment } = await req.json();

        if (!productId || !rating || rating < 1 || rating > 5) {
            return NextResponse.json({ error: 'Invalid rating or missing productId' }, { status: 400 });
        }

        const review = await prisma.review.create({
            data: {
                userId: decoded.id,
                productId,
                rating,
                comment,
            },
        });

        return NextResponse.json(review);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
