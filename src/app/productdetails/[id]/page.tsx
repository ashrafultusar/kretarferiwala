"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import { products } from "@/components/HomePage/AllProducts/productsData";

const ProductDetails = () => {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState<"description" | "return">(
    "description"
  );

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
            <span className="text-red-600 text-3xl font-bold">
              ৳ {product.price}
            </span>
            <span className="line-through text-gray-400">
              ৳ {product.price + 500}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              defaultValue={1}
              className="w-16 border rounded p-2"
              min={1}
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded cursor-pointer">
              অর্ডার করুন
            </button>
           
          </div>

          {/* Call Button */}
          <div className="space-y-3">
            <button className="w-full bg-blue-100 text-black p-3 rounded shadow">
              কল করতে ক্লিক করুন: 01700400000
            </button>
          </div>
          <p className="font-bold">
            Code : <span className="font-medium">ES345</span>
          </p>
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

      {/* Tabs Section */}
      <div className="mt-8">
        <div className="flex  space-x-4 border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === "description"
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("return")}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === "return"
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Return Policy
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 bg-gray-50 p-4 rounded shadow text-sm leading-relaxed">
          {activeTab === "description" ? (
            <div>
              <p className="mb-2">ঈদের স্পেশাল অফার ৩ দিনের জন্য।</p>
              <p className="mb-2">
                ৫ পিস জাফরান সাবান ১২০০ টাকা সাথে একটা নাইট ক্রিম ফ্রি।
              </p>
              <p className="mb-4">
                ১০ পিস জাফরান সাবান ২৪০০ টাকা সাথে ২ টা নাইট ক্রিম ফ্রি।
              </p>
              <p className="font-bold">জাফরান সাবানের বিশেষত্ব:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>ফেস উজ্জ্বল করে ও সেদ গ্লো বাড়ায়।</li>
                <li>স্কিন পরিষ্কার রাখে ও দাগ দূর করে।</li>
                <li>অ্যাকনি কমায় ও রেডনেস হ্রাস করে।</li>
                <li>স্কিন টানটান করে ও বয়সের ছাপ রোধ করে।</li>
                <li>পুড়া ও কালো দাগ মুছে ফেলে।</li>
                <li>স্কিন সফট করে ও ময়েশ্চার দেয়।</li>
                <li>১০০% অরগানিক উপাদান দিয়ে প্রস্তুত।</li>
              </ul>
            </div>
          ) : (
            <div>
              <p>
                ১) উল্লিখিত ডেলিভারি চার্জ ১ কেজি পর্যন্ত ওজনের পণ্যের জন্য।
              </p>
              <p className="mt-2">
                ২) ছবি এবং বর্ণনার সাথে পণ্য মিলে থাকা সত্ত্বেও পণ্য রিটার্ন
                করতে চাইলে কুরিয়ার চার্জ নিজ দায়িত্বে দিতে হবে।
              </p>
            </div>
          )}
        </div>
      </div>

      {/* related products */}
      <div className="my-7">
        <RelatedProducts></RelatedProducts>
      </div>
    </div>
  );
};

export default ProductDetails;
