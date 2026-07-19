'use client';

import Link from 'next/link';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(p => [2, 5, 18, 15].includes(p.id));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coral via-purple to-teal text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Send Love Across Borders 🌍
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Beautiful gifts delivered to your loved ones in the USA & Canada
          </p>
          <Link
            href="/category/flowers"
            className="inline-block bg-white text-coral font-bold px-8 py-4 rounded-full text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            Start Shopping 🛍️
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className={`${cat.color} rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <span className="text-5xl block mb-3">{cat.emoji}</span>
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-3xl shadow-sm mx-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Featured Gifts ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <span className="text-5xl block mb-4">🎯</span>
            <h3 className="text-xl font-semibold mb-2">1. Choose a Gift</h3>
            <p className="text-gray-600">Browse our curated collection of flowers, jewelry, pizza, and more.</p>
          </div>
          <div className="text-center p-6">
            <span className="text-5xl block mb-4">📝</span>
            <h3 className="text-xl font-semibold mb-2">2. Add Recipient Details</h3>
            <p className="text-gray-600">Enter your loved one&apos;s address in the USA or Canada with a personal message.</p>
          </div>
          <div className="text-center p-6">
            <span className="text-5xl block mb-4">🚀</span>
            <h3 className="text-xl font-semibold mb-2">3. We Deliver</h3>
            <p className="text-gray-600">We handle the rest! Your gift arrives beautifully packaged.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-teal to-sky text-white py-12 px-4 rounded-3xl mx-4 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Order from Anywhere in the World 🌎</h2>
          <p className="text-lg mb-6 opacity-90">No matter where you are, show your love with a gift delivered right to their door.</p>
          <Link
            href="/category/more"
            className="inline-block bg-white text-teal font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Explore All Gifts
          </Link>
        </div>
      </section>
    </div>
  );
}
