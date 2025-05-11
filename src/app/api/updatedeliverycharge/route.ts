// app/api/updatedeliverycharge/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DeliveryCharge from '@/models/DeliveryCharge';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { insideDhaka, outsideDhaka } = await req.json();

    let charge = await DeliveryCharge.findOne();

    if (charge) {
      charge.insideDhaka = insideDhaka;
      charge.outsideDhaka = outsideDhaka;
      await charge.save();
    } else {
      charge = new DeliveryCharge({ insideDhaka, outsideDhaka });
      await charge.save();
    }

    return NextResponse.json({ success: true, message: 'Updated successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to update.' }, { status: 500 });
  }
}



export async function GET() {
  try {
    await dbConnect();

    const deliveryCharge = await DeliveryCharge.findOne();

    if (!deliveryCharge) {
      return NextResponse.json({
        success: false,
        message: 'Delivery charges not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        insideDhaka: deliveryCharge.insideDhaka,
        outsideDhaka: deliveryCharge.outsideDhaka,
      },
    });
  } catch (error) {
    console.error('Error fetching delivery charges:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
