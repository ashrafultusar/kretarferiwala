"use client";

import React, { useState } from "react";
import Image from "next/image";

const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([
    "Skin Care",
    "Hair Care",
    "Makeup",
    "Fragrance",
    "Wellness",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim()) return;

    setCategories((prev) => [...prev, category.trim()]);
    setCategory("");
  };

  const handleDelete = (index: number) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-48 md:h-64 mb-8">
        <Image
          src="/card/card2.jpg" 
          alt="Category Banner"
          fill
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Manage Your Categories
          </h1>
        </div>
      </div>

      {/* Category Upload Section */}
      <div className="max-w-xl mx-auto p-6 ">
        <div className="bg-white text-center  shadow rounded p-4">
          <h2 className="text-xl font-semibold pb-2 mb-4">Add New Category</h2>

          <form onSubmit={handleSubmit} className="flex gap-4 mb-6 ">
            <input
              type="text"
              placeholder="Enter category name"
              className="flex-grow border p-2 rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Add
            </button>
          </form>
        </div>

        {/* Category List */}
        <div className="mt-4 md:mt-6 ">
          <h3 className="text-lg py-2 up bg-white text-center font-semibold mb-2">Uploaded Categories</h3>
          {categories.length === 0 ? (
            <p className="text-gray-500">No categories added yet.</p>
          ) : (
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-lg px-4 py-3 rounded bg-white "
                >
                  <span>{cat}</span>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700 text-md cursor-pointer"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
