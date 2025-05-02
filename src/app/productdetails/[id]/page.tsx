"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import ProductImageSlider from "@/components/ProductImageSlider/ProductImageSlider";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  discountPrice: number;
  regularPrice: number;
  code?: string;
}



const ProductDetails = () => {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"description" | "return">("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (data.success) {
          setProduct(data.data);
        } else {
          setProduct(null);
        }
      } catch (err) {
        console.error(err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10"><span className="loading loading-bars loading-xl text-red-500"></span></div>;
  }

  if (!product) {
    return <div className="text-center py-10">প্রোডাক্ট পাওয়া যায়নি</div>;
  }


  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-0">
        {/* Left: Product Image */}
        <ProductImageSlider images={product?.images} />

        {/* Right: Product Details */}
        <div className="flex flex-col justify-start space-y-4 mt-0 md:mt-1 lg:mt-6">
          <h1 className="text-2xl font-semibold">{product?.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-red-600 text-3xl font-bold">৳ {product?.discountPrice}</span>
            <span className="line-through text-gray-500">৳ {product?.regularPrice}</span>
          </div>
          <input type="number" defaultValue={1} className="w-16 border rounded p-2" min={1} />
          <Link href="/checkout" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 md:py-3 px-6 rounded cursor-pointer text-center">
            অর্ডার করুন
          </Link>
          <button className="w-full bg-blue-100 text-black py-3 rounded shadow">
            কল করতে ক্লিক করুন: 01700400000
          </button>
          <p className="font-bold">Code : <span className="font-medium">{product.code || "N/A"}</span></p>
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

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex  space-x-4 border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === "description" ? "border-b-2 border-green-600 text-green-600 font-semibold" : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("return")}
            className={`py-2 px-4 cursor-pointer ${
              activeTab === "return" ? "border-b-2 border-green-600 text-green-600 font-semibold" : "text-gray-500"
            }`}
          >
            Return Policy
          </button>
        </div>
        <div className="mt-4 bg-gray-50 p-4 rounded shadow text-sm leading-relaxed">
          {activeTab === "description" ? (
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          ) : (
            <div>
              <p>১) উল্লিখিত ডেলিভারি চার্জ ১ কেজি পর্যন্ত ওজনের পণ্যের জন্য।</p>
              <p className="mt-2">২) ছবি এবং বর্ণনার সাথে পণ্য মিলে থাকা সত্ত্বেও রিটার্ন করতে চাইলে কুরিয়ার চার্জ নিজ দায়িত্বে দিতে হবে।</p>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      <div className="my-7">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
