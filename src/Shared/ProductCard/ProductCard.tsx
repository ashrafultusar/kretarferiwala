import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-sm shadow-lg group transition-all duration-300 hover:shadow-2xl hover:border-orange-500">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-56 transition-transform duration-400 group-hover:scale-112"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{Math.round(((price + 500 - price) / (price + 500)) * 100)}%
        </div>
      </div>

      {/* Product Info */}
      <div className="py-5 text-center">
        {/* Product Name */}
        <h2 className="block w-full text-xl font-bold text-gray-800 ">
          {name}
        </h2>
        {/* Product Price */}
        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className="text-red-600 font-bold text-md">৳ {price}</span>
          <span className="text-gray-400 line-through text-sm">
            ৳ {price + 500}
          </span>
        </div>

        {/* Order Button */}
        <Link
          href={`/productdetails/${id}`}
          className="mt-4 bg-orange-400 hover:bg-orange-500 w-full text-white text-sm rounded-sm font-semibold py-2 px-7 transition text-center inline-block"
        >
          অর্ডার করুন
        </Link>
      </div>
    </div>
  );
}
