"use client";
import useCategories from "@/hooks/useCategories";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Define types for product and category
interface Product {
  _id: string;
  name: string;
  regularPrice: number;
  discountPrice: number;
  images: string[];
  category: string;
}

const AllCategoriesProducts = () => {
  const { categories } = useCategories();

  const [activeCategory, setActiveCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  // Fetch all products on component mount
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data); 
        setFilteredProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []); 

  // Handle category change and filter products based on active category
  useEffect(() => {
    if (activeCategory) {
      const filtered = products.filter(
        (product) => product.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]); 

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0].name); 
    }
  }, [categories]);

  const handleDelete = async () => {
    if (!productToDelete) return;
    
    try {
      // Call the DELETE API to remove the product from the database
      const response = await fetch(`/api/products/${productToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }

      
      setProducts(products.filter((product) => product._id !== productToDelete));
      setFilteredProducts(filteredProducts.filter((product) => product._id !== productToDelete));

      toast.success("Product deleted successfully");
      setIsModalOpen(false); 
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting the product");
      setIsModalOpen(false);
    }
  };

  const openDeleteModal = (id: string) => {
    setProductToDelete(id);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <p className="my-2 md:my-6 text-center text-md md:text-3xl">Handel You All Products</p>
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 mb-6">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => setActiveCategory(category.name)}
            className={`inline-flex items-center h-10 px-4 -mb-px text-sm sm:text-base whitespace-nowrap focus:outline-none border-b-2 cursor-pointer ${
              activeCategory === category.name
                ? "text-black border-orange-400 rounded-md bg-orange-500 "
                : "text-gray-700 border-transparent dark:text-black"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="space-y-4">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500">No products found</div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-orange-500 font-bold">
                  ${product.discountPrice ? product.discountPrice : product.regularPrice}
                </p>
                <span className="text-gray-500 text-sm">{product.category}</span>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => openDeleteModal(product._id)}
                className="text-red-500 text-sm font-medium hover:underline cursor-pointer"
                aria-label={`Delete ${product.name}`}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure?</h3>
            <p className="text-gray-500 mb-4">This action cannot be undone.</p>
            <div className="flex justify-between">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategoriesProducts;
