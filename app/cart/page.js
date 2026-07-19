'use client';

import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <span className="text-6xl block mb-4">🛒</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">Add some gifts to brighten someone&apos;s day!</p>
        <Link
          href="/"
          className="inline-block bg-coral text-white font-bold px-8 py-3 rounded-full hover:bg-red-500 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart 🛒</h1>

      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
            {/* Item Image */}
            <div className={`${item.color} w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0`}>
              <span className="text-4xl">{item.emoji}</span>
            </div>

            {/* Item Info */}
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-teal font-bold">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>

            {/* Subtotal */}
            <div className="text-right w-24">
              <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-400 hover:text-red-600 text-xl"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl text-gray-700">Total:</span>
          <span className="text-3xl font-bold text-teal">${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="block w-full bg-coral hover:bg-red-500 text-white text-center font-bold py-4 rounded-full text-lg transition"
        >
          Proceed to Checkout →
        </Link>
        <Link
          href="/"
          className="block text-center text-coral hover:underline mt-4"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
