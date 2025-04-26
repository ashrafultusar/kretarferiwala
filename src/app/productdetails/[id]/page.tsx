"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/components/HomePage/AllProducts/AllProducts";

const ProductDetails = () => {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-red-600 text-3xl font-bold">৳ {product.price}</span>
            <span className="line-through text-gray-400">৳ {product.price + 500}</span>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              defaultValue={1}
              className="w-16 border rounded p-2"
              min={1}
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded">
              অর্ডার করুন
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Buy Now
            </button>
          </div>

          {/* Call Button */}
          <div className="space-y-3">
            <button className="w-full bg-blue-100 text-black p-3 rounded shadow">
              কল করতে ক্লিক করুন: 01324737750
            </button>
          </div>

          {/* Delivery Info */}
          <div className="text-sm">
            <div className="flex justify-between border-t pt-3">
              <span>ঢাকায় ডেলিভারি খরচ</span>
              <span>৳ 70.00</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span>ঢাকার বাইরে কুরিয়ার খরচ</span>
              <span>৳ 130.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 p-4 border rounded bg-gray-50 text-sm leading-relaxed">
        <p>
          বিষয়ঃ ১) উল্লিখিত ডেলিভারি চার্জ ১(এক) কেজি পর্যন্ত ওজনের পণ্যের জন্য।
          পণ্যের ওজন বাড়ালে ডেলিভারি চার্জ ও বাড়বে। ২) ছবি এবং বর্ণনার সাথে পণ্য
          মিলে থাকা সত্ত্বেও আপনি পণ্য গ্রহণ করতে না চাইলে কুরিয়ার চার্জ ১৩০ টাকা
          কুরিয়ার অফিসে প্রদান করে পণ্য আমাদের ঠিকানায় রিটার্ন করবেন।
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
