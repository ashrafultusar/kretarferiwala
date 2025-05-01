import Product from '@/models/Product';
import dbConnect from '@/lib/db';
import cloudinary from '@/lib/cloudinary';

export async function createProduct(formData: FormData) {
  await dbConnect();

  const name = formData.get('name') as string;
  const category = formData.get('category') as string;
  const description = formData.get('description') as string;
  const regularPrice = parseFloat(formData.get('regularPrice') as string);
  const discountPrice = parseFloat(formData.get('discountPrice') as string);
  const files = formData.getAll('images') as File[];

  const imageUrls: string[] = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Image = buffer.toString("base64");
    const dataUri = `data:${file.type};base64,${base64Image}`;

    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: "products", 
    });

    imageUrls.push(uploadResult.secure_url);
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
