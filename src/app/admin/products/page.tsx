"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    regularPrice: "",
    discountPrice: "",
    images: [] as File[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("regularPrice", product.regularPrice);
    formData.append("discountPrice", product.discountPrice);
  
    product.images.forEach((file) => {
      formData.append("images", file);
    });
  
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });
  
      if (res.ok) {
        toast.success("Success message");
        setProduct({
          name: "",
          category: "",
          description: "",
          regularPrice: "",
          discountPrice: "",
          images: [],
        });
      } else {
        const error = await res.json();
        toast.error("Error: " + error.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };
  



  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/card/card2.jpg"
          alt="Banner"
          fill
          className="object-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Add Your New Product
          </h1>
        </div>
      </div>

      {/* Product Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow max-w-xl mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />

        {/* Category Dropdown */}
        <select
          className="w-full border p-2 rounded"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="skin-care">Skin Care</option>
          <option value="hair-care">Hair Care</option>
          <option value="makeup">Makeup</option>
          <option value="fragrance">Fragrance</option>
          <option value="wellness">Wellness</option>
        </select>

        <textarea
          placeholder="Product Description"
          className="w-full border p-2 rounded"
          rows={4}
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          required
        />

        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Regular Price"
            className="w-full border p-2 rounded"
            value={product.regularPrice}
            onChange={(e) =>
              setProduct({ ...product, regularPrice: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Discount Price"
            className="w-full border p-2 rounded"
            value={product.discountPrice}
            onChange={(e) =>
              setProduct({ ...product, discountPrice: e.target.value })
            }
            required
          />
        </div>

        {/* Multiple File Input */}
        <input
          type="file"
          accept="image/*"
          multiple
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setProduct({
              ...product,
              images: e.target.files ? Array.from(e.target.files) : [],
            })
          }
          required
        />

        {/* Optional: Show Preview of Selected Images */}
        {product.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((file, index) => (
              <div key={index} className="w-full h-24 relative border rounded overflow-hidden">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full cursor-pointer font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
