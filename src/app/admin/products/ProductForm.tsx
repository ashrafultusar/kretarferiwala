'use client';
import { useState } from 'react';

export default function ProductForm() {
  const [product, setProduct] = useState({ name: '', price: '', category: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add Product', product);
    // API call goes here
    setProduct({ name: '', price: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow mb-6">
      <input
        className="w-full border p-2"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        className="w-full border p-2"
        placeholder="Price"
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        className="w-full border p-2"
        placeholder="Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Add Product</button>
    </form>
  );
}
