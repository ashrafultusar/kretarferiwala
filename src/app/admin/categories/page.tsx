"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

type Category = {
  _id: string;
  name: string;
  image: string;
};

const CategoryPage = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        if (res.ok) {
          const data = await res.json();
          setCategories(data);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim() || !categoryImage) return;

    const formData = new FormData();
    formData.append("name", category);
    formData.append("image", categoryImage);

    try {
      const res = await fetch("/api/category", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newCategory = await res.json();
        setCategories((prev) => [...prev, newCategory]);
        setCategory("");
        setCategoryImage(null);
        setImagePreview("");
        toast.success("Category added");
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to add category");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCategoryImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleDelete = async (id: string, index: number) => {
    try {
      const res = await fetch(`/api/category?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const updated = [...categories];
        updated.splice(index, 1);
        setCategories(updated);
        toast.success("Category deleted");
      } else {
        const error = await res.json();
        toast.error(error.error || "Failed to delete category");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
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
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-full lg:w-1/2 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-800 mb-4 text-center">
              Add New Category
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter category name"
                className="border border-orange-300 p-2 rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border border-orange-300 p-2 rounded"
              />
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={80}
                  height={80}
                  className="rounded"
                />
              )}
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer"
              >
                Add
              </button>
            </form>
          </div>

          {/* Display Categories */}
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
                    <div className="flex items-center gap-3">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                      <span className="text-gray-800 font-medium">
                        {cat.name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(cat._id, index)}
                      className="bg-orange-500 px-3 rounded-md py-2 text-white hover:bg-orange-600 text-sm font-semibold cursor-pointer"
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
