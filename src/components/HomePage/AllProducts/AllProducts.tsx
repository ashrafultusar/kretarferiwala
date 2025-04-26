"use client";

import React from "react";
import Image from "next/image";
import TitleWithLine from "@/Shared/TitleWithLine/TitleWithLine";
import Link from "next/link";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  icon: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gawa Ghee (500gm)",
    price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 2,
    name: "Natural Honey (1kg)",
    price: 750,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 3,
    name: "Premium Tea (250gm)",
    price: 450,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 4,
    name: "Fresh Milk (1L)",
    price: 120,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 5,
    name: "Organic Turmeric (200gm)",
    price: 300,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 6,
    name: "Mustard Oil (500ml)",
    price: 280,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 7,
    name: "Brown Rice (5kg)",
    price: 800,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 8,
    name: "Dates (Ajwa 500gm)",
    price: 1500,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 9,
    name: "Black Seed Oil (100ml)",
    price: 500,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 10,
    name: "Herbal Soap (3pcs)",
    price: 250,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
];

const AllProducts = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <TitleWithLine title="All Products" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link href={`/productdetails/${product.id}`} key={product.id}
            
           
            className="border p-4 rounded-md text-center transition-all duration-300 hover:border-orange-500 group cursor-pointer"
          >
            <div className="flex justify-start">
              <Image
                src={product.icon}
                alt="icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={128}
                height={128}
                className="mx-auto object-contain transition-transform duration-300 group-hover:translate-y-[-10px]"
              />
            </div>

            <h2 className="text-sm font-medium mt-4 truncate">{product.name}</h2>
            <p className="text-md font-semibold mt-2">Tk {product.price}.00</p>

            <button className="mt-4 bg-orange-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-orange-500 transition">
              Quick Add
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
