'use client';

import { useParams } from 'next/navigation';
import { categories, getProductsByCategory } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';
import Link from 'next/link';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.id === slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Category not found</h1>
        <Link href="/" className="text-coral hover:underline mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="relative rounded-3xl overflow-hidden mb-8 h-48">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="mt-2 text-lg opacity-90">{category.description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Back Link */}
      <div className="text-center mt-12">
        <Link href="/" className="text-coral hover:underline font-semibold">
          ← Back to all categories
        </Link>
      </div>
    </div>
  );
}
