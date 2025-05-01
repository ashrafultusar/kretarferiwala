import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';
import Product from '@/models/Product';
import dbConnect from '@/lib/db';

export async function createProduct(formData: FormData) {
  await dbConnect();

  const name = formData.get('name') as string;
  const category = formData.get('category') as string;
  const description = formData.get('description') as string;
  const regularPrice = parseFloat(formData.get('regularPrice') as string);
  const discountPrice = parseFloat(formData.get('discountPrice') as string);
  const files = formData.getAll('images') as File[];

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const imageUrls: string[] = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
    const uploadPath = path.join(uploadDir, filename);
    await writeFile(uploadPath, buffer);
    imageUrls.push(`/uploads/${filename}`);
  }

  const newProduct = await Product.create({
    name,
    category,
    description,
    regularPrice,
    discountPrice,
    images: imageUrls,
  });

  return newProduct;
}
