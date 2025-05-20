import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    
    // Test the connection by listing all collections
    const collections = await db.listCollections().toArray();
    
    return NextResponse.json({
      status: 'success',
      message: 'Successfully connected to MongoDB',
      collections: collections.map(c => c.name)
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to connect to database' },
      { status: 500 }
    );
  }
} 