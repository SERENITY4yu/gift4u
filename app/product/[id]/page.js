'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getProductById } from '../../../data/products';
import { useCart } from '../../../context/CartContext';
import Link from 'next/link';

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product not found</h1>
        <Link href="/" className="text-coral hover:underline mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href={`/category/${product.category}`} className="text-coral hover:underline mb-6 inline-block">
        ← Back to {product.category}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Product Image */}
        <div className={`${product.color} rounded-3xl h-80 md:h-96 flex items-center justify-center`}>
          <span className="text-9xl">{product.emoji}</span>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{product.description}</p>

          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-lg">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="text-gray-500 ml-2">({product.rating})</span>
          </div>

          <p className="text-3xl font-bold text-teal mb-6">${product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-gray-700 font-semibold">Quantity:</span>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-lg"
            >
              -
            </button>
            <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-lg"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-coral hover:bg-red-500 text-white hover:shadow-lg'
            }`}
          >
            {added ? '✓ Added to Cart!' : 'Add to Cart 🛒'}
          </button>

          <button
            onClick={() => { handleAddToCart(); router.push('/cart'); }}
            className="w-full py-4 rounded-full font-bold text-lg mt-3 border-2 border-teal text-teal hover:bg-teal hover:text-white transition-all"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
