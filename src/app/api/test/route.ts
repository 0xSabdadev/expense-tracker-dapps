import { connectDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Database connected successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to connect to database" }, { status: 500 });
  }
}