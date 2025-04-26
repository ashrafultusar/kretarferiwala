import ProductCard from '@/Shared/ProductCard/ProductCard';
import TitleWithLine from '@/Shared/TitleWithLine/TitleWithLine';
import React from 'react';
import { products } from '../HomePage/AllProducts/productsData';

const RelatedProducts = () => {
    return (
        <div>
            <TitleWithLine title='Related Products'></TitleWithLine>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((Product) => (
          <ProductCard key={Product.id} {...Product} />
        ))}
      </div>
        </div>
    );
};

export default RelatedProducts;