import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { createOrder } from "@/controller/orderController";
import Order from "@/models/Order";


export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const order = await createOrder(body);

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { success: false, message: "Order creation failed" },
      { status: 500 }
    );
  }
}


export async function GET() {
    await dbConnect();
  
    try {
      const orders = await Order.find().sort({ createdAt: -1 }); 
      return NextResponse.json(orders);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      return NextResponse.json(
        { success: false, message: "Failed to fetch orders" },
        { status: 500 }
      );
    }
  }


  
