import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Category from "@/models/category";


// POST: Create Category
export async function createCategory(req: Request) {
  try {
    await dbConnect();
    const { name } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Category name is required" }, { status: 400 });
    }

    // Check if category already exists
    const existing = await Category.findOne({ name: name.trim() }); // ✅ fixed 'category' -> 'Category'
    if (existing) {
      return NextResponse.json({ error: "Category already exists" }, { status: 409 });
    }

    // Create new category
    const newCategory = await Category.create({ name: name.trim() });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (err) {
    console.error("Failed to load categories:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET: Fetch All Categories
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
