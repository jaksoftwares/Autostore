import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { PaymentStatus } from '@prisma/client';

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

        const payment = await prisma.payment.findUnique({
            where: { id: params.id },
            include: { order: { select: { userId: true } } } // ✅ Include `userId` from Order
        });

        if (!payment || (decoded.role !== 'ADMIN' && payment.order?.userId !== decoded.id)) {
            return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
        }

        return NextResponse.json(payment);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Fetch payment details
        const payment = await prisma.payment.findUnique({
            where: { id: params.id }
        });

        if (!payment || payment.status !== PaymentStatus.COMPLETED) { // ✅ Use Enum
            return NextResponse.json({ error: 'Refund not possible' }, { status: 400 });
        }

        // Process refund
        const refundedPayment = await prisma.payment.update({
            where: { id: params.id },
            data: { status: PaymentStatus.PENDING} 
        });

        return NextResponse.json({ message: 'Refund processed successfully', refundedPayment });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}