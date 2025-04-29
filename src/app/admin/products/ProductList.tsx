"use client";

import { useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "T-shirt", price: 20, category: "Clothing" },
  ]);

  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <span>
              {product.name} - ${product.price} ({product.category})
            </span>
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
