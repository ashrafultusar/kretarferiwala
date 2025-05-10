// import { NextResponse } from 'next/server';
// import Product from '@/models/Product';
// import mongoose from 'mongoose';
// import dbConnect from '@/lib/db';


// // Fetch a product by ID
// export async function GET(req: Request, { params }: { params: { id: string } }) {
//   await dbConnect();

//   const { id } = params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ success: false, message: 'Invalid ID' }, { status: 400 });
//   }

//   try {
//     const product = await Product.findById(id);
//     if (!product) {
//       return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: product }, { status: 200 });
// } catch (error) {
//     return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
//   }
  
// }



// // Delete a product by ID
// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   await dbConnect();

//   const { id } = params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json({ success: false, message: 'Invalid ID' }, { status: 400 });
//   }

//   try {
//     const deletedProduct = await Product.findByIdAndDelete(id);

//     if (!deletedProduct) {
//       return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, message: 'Product deleted successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/Product';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';

// GET a single product by ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  await dbConnect();

  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: 'Invalid ID' },
      { status: 400 }
    );
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// DELETE a product by ID
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  await dbConnect();

  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: 'Invalid ID' },
      { status: 400 }
    );
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Product deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
