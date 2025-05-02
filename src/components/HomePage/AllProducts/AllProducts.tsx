"use client";

import React from "react";
import TitleWithLine from "@/Shared/TitleWithLine/TitleWithLine";
import ProductCard from "@/Shared/ProductCard/ProductCard";
import useProducts from "@/hooks/useProducts";

const AllProducts = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <section className="container mx-auto my-6 px-4">
      <TitleWithLine title="All Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
           
            name={product.name}
            regularPrice={product.regularPrice}
            discountPrice={product.discountPrice}
            image={product.images[0]} // Use first image
          />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
