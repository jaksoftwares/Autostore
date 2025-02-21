import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

// 🔹 GET: Fetch single user
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = params.id;
        const token = req.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || (decoded.role !== 'ADMIN' && decoded.id !== userId)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, email: true, role: true, createdAt: true }
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🔹 PUT: Update user profile
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = params.id;
        const token = req.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || (decoded.role !== 'ADMIN' && decoded.id !== userId)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const { name, email, password, role } = await req.json();

        // Only admins can update user roles
        if (role && decoded.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized to update role' }, { status: 403 });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                name,
                email,
                ...(password && { password }), // Update password only if provided
                ...(role && { role }) // Update role only if admin
            },
            select: { id: true, name: true, email: true, role: true }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// 🔹 DELETE: Remove user
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = params.id;
        const token = req.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded || (decoded.role !== 'ADMIN' && decoded.id !== userId)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        await prisma.user.delete({ where: { id: userId } });

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
