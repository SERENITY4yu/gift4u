'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🎁</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
              Gift4U
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/category/flowers" className="text-gray-700 hover:text-coral transition">Flowers</Link>
            <Link href="/category/jewelry" className="text-gray-700 hover:text-coral transition">Jewelry</Link>
            <Link href="/category/pizza" className="text-gray-700 hover:text-coral transition">Pizza</Link>
            <Link href="/category/frames" className="text-gray-700 hover:text-coral transition">Frames</Link>
            <Link href="/category/more" className="text-gray-700 hover:text-coral transition">More</Link>
            <Link href="/about" className="text-gray-700 hover:text-coral transition">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-coral transition">Contact</Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2">
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/category/flowers" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>💐 Flowers</Link>
            <Link href="/category/jewelry" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>💍 Jewelry</Link>
            <Link href="/category/pizza" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>🍕 Pizza</Link>
            <Link href="/category/frames" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>🖼️ Frames</Link>
            <Link href="/category/more" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>🎁 More Gifts</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-coral" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
