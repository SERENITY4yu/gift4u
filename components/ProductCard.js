'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-coral transition">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-teal">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-coral hover:bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
