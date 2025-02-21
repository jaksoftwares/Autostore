import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'GET request for auth/me' });
}

export async function POST(req: NextRequest) {
    return NextResponse.json({ message: 'POST request for auth/me' });
}

export async function PUT(req: NextRequest) {
    return NextResponse.json({ message: 'PUT request for auth/me' });
}

export async function DELETE(req: NextRequest) {
    return NextResponse.json({ message: 'DELETE request for auth/me' });
}
