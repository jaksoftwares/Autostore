import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch all orders
export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

        const orders = await prisma.order.findMany({
            select: {
                id: true,
                totalPrice: true,
                status: true,
                createdAt: true,
                user: { select: { name: true, email: true } },
            },
        });

        return NextResponse.json(orders);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🟡 PUT: Update order status
export async function PUT(req: NextRequest) {
    try {
        const { id, status } = await req.json();
        if (!id || !status) return NextResponse.json({ error: 'Order ID and status required' }, { status: 400 });

        const token = req.cookies.get('token')?.value;
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

        const updatedOrder = await prisma.order.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedOrder);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
}
