"use client";

import ProductCard from "@/Shared/ProductCard/ProductCard";
import { useParams } from "next/navigation";

const dummyProducts = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 2,
    name: "Blender",
    category: "Kitchen Accessories",
    price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 3,
    name: "Wall Painting",
    category: "Home Decor",
    price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  {
    id: 4,
    name: "Lamp",
    category: "Home Accessories",
    price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png",
  },
  { id: 5, name: "Baby Stroller", category: "Baby Products",price: 900,
    image: "/card/card.jpg",
    icon: "/logo_icon/logo.png", },
];

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  if (!category) {
    return (
      <div className="text-center text-red-500 p-10">Category not found!</div>
    );
  }

  const decodedCategory = decodeURIComponent(category.toString());

  const filteredProducts = dummyProducts.filter(
    (product) => product.category === decodedCategory
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      
<div>
  <h1 className="text-center text-lg md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 ">Category / <span className="font-medium">{decodedCategory}</span></h1>
</div>


      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product}></ProductCard>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No products found for this category.</p>
      )}
    </div>
  );
}
