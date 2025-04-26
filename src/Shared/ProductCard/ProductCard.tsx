"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  icon: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, icon }) => {
  return (
    <Link
      href={`/productdetails/${id}`}
      className="border p-4 text-center transition-all duration-300 hover:border-orange-500 group cursor-pointer"
    >
      <div className="flex justify-start">
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          className="mx-auto object-contain transition-transform duration-300 group-hover:translate-y-[-10px]"
        />
      </div>

      <h2 className="text-sm font-medium mt-4 truncate">{name}</h2>

      <div className="flex items-center justify-center space-x-2 text-md font-semibold mt-2">
        <span>৳ {price}</span>
        <span className="text-gray-400 line-through">৳ {price + 500}</span>
      </div>

      <button className="mt-4 bg-orange-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-orange-500 transition">
        Quick Add
      </button>
    </Link>
  );
};

export default ProductCard;
