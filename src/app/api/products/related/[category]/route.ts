// import dbConnect from "@/lib/db";
// import Product from "@/models/Product";
// import type { NextApiRequest, NextApiResponse } from "next";


// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { category } = req.query; // Get the category from the query

//   if (req.method === "GET") {
//     try {
//       // Connect to MongoDB
//       await dbConnect();

//       // Fetch products by category
//       const products = await Product.find({ category }).limit(8); // Fetch only 8 products for the category

//       if (!products || products.length === 0) {
//         return res.status(404).json({ success: false, message: "No related products found" });
//       }

//       return res.status(200).json({ success: true, data: products });
//     } catch (error) {
//         console.error(error);
//       return res.status(500).json({ success: false, error: "Error fetching related products" });
//     }
//   }
// }


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
