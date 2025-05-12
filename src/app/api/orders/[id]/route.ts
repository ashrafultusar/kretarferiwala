// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/db';
// import Order from '@/models/Order';
// import mongoose from 'mongoose';

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   await dbConnect();

//   const { id } = params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return NextResponse.json(
//       { success: false, message: 'Invalid order ID' },
//       { status: 400 }
//     );
//   }

//   try {
//     const { status } = await request.json();

//     if (!status) {
//       return NextResponse.json(
//         { success: false, message: 'Status is required' },
//         { status: 400 }
//       );
//     }

//     const updatedOrder = await Order.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     if (!updatedOrder) {
//       return NextResponse.json(
//         { success: false, message: 'Order not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, data: updatedOrder },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: (error as Error).message },
//       { status: 500 }
//     );
//   }
// }


import dbConnect from '@/lib/db';
import Order from '@/models/Order';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';


// ✅ Correct: Let’s use the inferred type from Next.js route handler structure
export async function PATCH(
  request: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const { id } = params;

  // Connect to DB
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: 'Invalid order ID' },
      { status: 400 }
    );
  }

  try {
    const { status } = await request.json();

    if (!status) {
      return NextResponse.json(
        { success: false, message: 'Status is required' },
        { status: 400 }
      );
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return NextResponse.json(
        { success: false, message: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedOrder },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
