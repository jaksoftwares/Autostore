import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'GET request for cart' });
}

export async function POST(req: NextRequest) {
    return NextResponse.json({ message: 'POST request for cart' });
}

export async function PUT(req: NextRequest) {
    return NextResponse.json({ message: 'PUT request for cart' });
}

export async function DELETE(req: NextRequest) {
    return NextResponse.json({ message: 'DELETE request for cart' });
}
