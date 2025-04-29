'use client';



import ProductForm from './ProductForm';
import ProductList from './ProductList';

export default function ProductsPage() {
  return (
   <>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ProductForm />
      <ProductList />
      </>
  );
}
