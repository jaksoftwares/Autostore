import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🟢 GET: Fetch Admin Dashboard Overview
export async function GET(req: NextRequest) {
    try {
        // Check authentication & admin role
        const token = req.cookies.get('token')?.value;
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const decoded = verifyToken(token);
        if (!decoded || decoded.role !== 'ADMIN') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

        // Fetch stats
        const totalUsers = await prisma.user.count();
        const totalProducts = await prisma.product.count();
        const totalOrders = await prisma.order.count();
        const totalRevenue = await prisma.order.aggregate({ _sum: { totalPrice: true } });

        return NextResponse.json({
            totalUsers,
            totalProducts,
            totalOrders,
            totalRevenue: totalRevenue._sum.totalPrice || 0,
        });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
