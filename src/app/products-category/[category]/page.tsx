import { useParams } from 'next/navigation';

const dummyProducts = [
  { id: 1, name: 'iPhone 15', category: 'Electronics' },
  { id: 2, name: 'Blender', category: 'Kitchen Accessories' },
  { id: 3, name: 'Wall Painting', category: 'Home Decor' },
  { id: 4, name: 'Lamp', category: 'Home Accessories' },
  { id: 5, name: 'Baby Stroller', category: 'Baby Products' },
];

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  if (!category) {
    return <div className="text-center text-red-500 p-10">Category not found!</div>;
  }

  const decodedCategory = decodeURIComponent(category.toString());

  const filteredProducts = dummyProducts.filter(
    (product) => product.category === decodedCategory
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">{decodedCategory}</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found for this category.</p>
      )}
    </div>
  );
}
