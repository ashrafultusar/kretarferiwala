import { createCategory, getCategories } from "@/controller/categoryController";

export async function POST(req: Request) {
  return createCategory(req);
}

export async function GET() {
  return getCategories();
}
