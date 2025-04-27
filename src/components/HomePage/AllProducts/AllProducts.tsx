"use client";

import React from "react";
import TitleWithLine from "@/Shared/TitleWithLine/TitleWithLine";
 // ekhane theke import
import ProductCard from "@/Shared/ProductCard/ProductCard";
import { products } from "./productsData";

const AllProducts = () => {
  return (
    <section className="container mx-auto my-6 px-4">
      <TitleWithLine title="All Products" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((Product) => (
          <ProductCard key={Product.id} {...Product} />
        ))}
        
      </div>
    </section>
  );
};

export default AllProducts;
