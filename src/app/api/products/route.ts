// import { NextResponse } from 'next/server';

// import Product from '@/models/Product';
// import dbConnect from '@/lib/db';

// export async function GET() {
//   await dbConnect();
//   const products = await Product.find();
//   return NextResponse.json(products);
// }

// export async function POST(req: Request) {
//   await dbConnect();
//   const data = await req.json();
//   const newProduct = await Product.create(data);
//   return NextResponse.json(newProduct, { status: 201 });
// }


import { NextResponse } from 'next/server';

import dbConnect from '@/lib/db';
import { createProduct } from '@/controller/productController';
import Product from '@/models/Product';

export async function GET() {
  await dbConnect();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await dbConnect();

  const contentType = req.headers.get("content-type");
  if (contentType?.includes("multipart/form-data")) {
    const formData = await req.formData(); 
    const newProduct = await createProduct(formData);
    return NextResponse.json(newProduct, { status: 201 });
  } else {
    return NextResponse.json({ message: "Unsupported content type" }, { status: 400 });
  }
}
