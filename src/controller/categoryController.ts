import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Category from "@/models/category";
import cloudinary from "@/lib/cloudinary";
import { Types } from "mongoose";

const uploadToCloudinary = async (
  file: File
): Promise<{ secure_url: string }> => {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "categories" }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result as { secure_url: string });
        }
      })
      .end(buffer);
  });
};

export async function createCategory(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const file = formData.get("image") as File | null;

    if (!name || !file) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }

    const { secure_url } = await uploadToCloudinary(file);

    const newCategory = await Category.create({ name, image: secure_url });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (err) {
    console.error("Failed to create category:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function getCategories() {
  try {
    await dbConnect();
    const categories = await Category.find().sort({ name: 1 });
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.error("Failed to load categories:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function deleteCategory(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid category ID" },
        { status: 400 }
      );
    }

    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Category deleted" }, { status: 200 });
  } catch (err) {
    console.error("Failed to delete category:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
