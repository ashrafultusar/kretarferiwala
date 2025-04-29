"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    price: "29.99",
    imageUrl:"/card/card.jpg",
    category: "Electronics",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: "49.99",
    imageUrl: "/card/card.jpg",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Laptop",
    price: "19.99",
    imageUrl: "/card/card.jpg",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Blender",
    price: "99.99",
    imageUrl: "/card/card.jpg",
    category: "Home Appliances",
  },
];

const categories = ["Electronics", "Clothing", "Home Appliances","Home Appliances","Home Appliances","Home Appliances"];

const AllCategoriesProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`inline-flex items-center h-10 px-4 -mb-px text-sm sm:text-base whitespace-nowrap focus:outline-none border-b-2 cursor-pointer ${
              activeCategory === category
                ? "text-black border-orange-400 dark:text-orange-400 dark:"
                : "text-gray-700 border-transparent dark:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}

     <div className="space-y-4">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4 hover:shadow-lg transition-shadow"
    >
      {/* Product Image */}
      <div className="relative w-20 h-20 shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-orange-500 font-bold">${product.price}</p>
        <span className="text-gray-500 text-sm">{product.category}</span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => console.log(`Delete ${product.id}`)}
        className="text-red-500 text-sm font-medium hover:underline"
        aria-label={`Delete ${product.name}`}
      >
        Delete
      </button>
    </div>
  ))}
</div>


    </div>
  );
};

export default AllCategoriesProducts;
