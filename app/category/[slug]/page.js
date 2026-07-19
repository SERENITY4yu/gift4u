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
      <div className={`${category.color} rounded-3xl p-8 mb-8 text-center`}>
        <span className="text-6xl block mb-4">{category.emoji}</span>
        <h1 className="text-3xl font-bold text-gray-800">{category.name}</h1>
        <p className="text-gray-600 mt-2">{category.description}</p>
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
