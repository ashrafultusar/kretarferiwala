"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        if (res.ok) {
          const data = await res.json();
          const names = data.map((cat: { name: string }) => cat.name);
          setCategories(names);
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim()) return;

    try {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: category }),
      });

      if (res.ok) {
        const newCategory = await res.json();
        setCategories((prev) => [...prev, newCategory.name]);
        setCategory("");
        toast.success("Category added");
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to add category");
      }
    } catch (err) {
      console.error("Failed to load categories:", err);
      toast.error("Something went wrong");
    }
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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Manage Your Categories
          </h1>
        </div>
      </div>

      {/* Category Upload Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Add New Category */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-full lg:w-1/2 shadow-md rounded-lg p-6 self-start">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4 text-center">
              Add New Category
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="Enter category name"
                className="flex-grow border border-orange-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer"
              >
                Add
              </button>
            </form>
          </div>

          {/* Uploaded Categories */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-full lg:w-1/2 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
              All Categories
            </h3>
            {categories.length === 0 ? (
              <p className="text-gray-600 text-center">
                No categories added yet.
              </p>
            ) : (
              <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center px-4 py-2 rounded bg-white shadow-sm"
                  >
                    <span className="text-gray-800 font-medium">{cat}</span>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold cursor-pointer"
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
    </div>
  );
};

export default CategoryPage;
