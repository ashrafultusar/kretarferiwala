import { NextRequest, NextResponse } from "next/server";

import { writeFile } from "fs/promises";
import path from "path";
import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/db";
import SliderImage from "@/models/sliderImage";

export async function POST(req: NextRequest) {
  await dbConnect();
  const formData = await req.formData();
  const file = formData.get("image");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No image file provided" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", file.name);
  await writeFile(filePath, buffer);

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: "slider_images",
    });

    const newImage = await SliderImage.create({ imageUrl: uploadResult.secure_url });
    return NextResponse.json(newImage, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
  
}

export async function GET() {
  await dbConnect();
  const images = await SliderImage.find().sort({ createdAt: -1 });
  return NextResponse.json(images, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  await dbConnect();
  const id = new URL(req.url).searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const deleted = await SliderImage.findByIdAndDelete(id);
  return NextResponse.json(deleted, { status: 200 });
}
