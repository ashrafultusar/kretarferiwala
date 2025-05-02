import { NextResponse } from 'next/server';
import Product from '@/models/Product';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ success: false, message: 'Invalid ID' }, { status: 400 });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
} catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
  
}
