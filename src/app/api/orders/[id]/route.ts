import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch single order details (Order Owner/Admin)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const order = await prisma.order.findUnique({
            where: { id: params.id },
            include: { items: { include: { product: true } }, user: true }
        });

        if (!order || (decoded.role !== 'ADMIN' && order.userId !== decoded.id)) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        return NextResponse.json(order);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🟢 PUT: Update order status (Admin Only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { status } = await req.json();

        if (!status) {
            return NextResponse.json({ error: 'Order status required' }, { status: 400 });
        }

        const updatedOrder = await prisma.order.update({
            where: { id: params.id },
            data: { status }
        });

        return NextResponse.json(updatedOrder);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🔴 DELETE: Cancel order (Order Owner/Admin)
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

        const order = await prisma.order.findUnique({
            where: { id: params.id }
        });

        if (!order || (decoded.role !== 'ADMIN' && order.userId !== decoded.id)) {
            return NextResponse.json({ error: 'Order not found or access denied' }, { status: 404 });
        }

        await prisma.order.delete({ where: { id: params.id } });

        return NextResponse.json({ message: 'Order cancelled successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
