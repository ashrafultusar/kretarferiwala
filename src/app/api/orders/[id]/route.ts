// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/db';
// import Order from '@/models/Order';
// import mongoose from 'mongoose';




// export async function PATCH(
//   request: NextRequest,
//   context: { params: { id: string } }
// ) {
//   await dbConnect();

//   const { id } = context.params;

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


import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/models/Order';
import mongoose from 'mongoose';

export async function PATCH(request: NextRequest) {
  await dbConnect();

  const url = new URL(request.url);
  const id = url.pathname.split('/')[3]; // Extract ID from the URL

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
