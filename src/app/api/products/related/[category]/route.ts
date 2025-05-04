
import { NextRequest, NextResponse } from "next/server";

import Product from "@/models/Product";
import dbConnect from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: { category: string } }) {
  const { category } = params;

  try {
    await dbConnect();

    const products = await Product.find({ category });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching related products:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
