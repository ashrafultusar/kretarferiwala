"use client";

import React from "react";
import Image from "next/image";
import TitleWithLine from "@/Shared/TitleWithLine/TitleWithLine";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  icon: string;
}

const products: Product[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: "Gawa Ghee/গাওয়া ঘি (500gm)",
  price: 900,
  image: "/card/card.jpg",
  icon: "/logo_icon/logo.png",
}));

const AllProducts = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <TitleWithLine title="All Products"></TitleWithLine>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md text-center transition-all duration-300 hover:border-orange-500 group cursor-pointer"
          >
            {/* Top Small Icon */}
            <div className="flex justify-start">
              <Image
                src={product.icon}
                alt="icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {/* Product Image */}
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={128}
                height={128}
                className="mx-auto object-contain transition-transform duration-300 group-hover:translate-y-[-10px]"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-sm font-medium mt-4 truncate">{product.name}</h2>

            {/* Price */}
            <p className="text-md font-semibold mt-2">Tk {product.price}.00</p>

            {/* Button */}
            <button className="mt-4 bg-orange-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-orange-500 transition">
              Quick Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
