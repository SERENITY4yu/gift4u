import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🎁</span>
              <span className="text-2xl font-bold">Gift4U</span>
            </div>
            <p className="text-gray-400">
              Send love across borders. Beautiful gifts delivered to your loved ones in the USA and Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/category/flowers" className="block text-gray-400 hover:text-white transition">Flowers</Link>
              <Link href="/category/jewelry" className="block text-gray-400 hover:text-white transition">Jewelry</Link>
              <Link href="/category/pizza" className="block text-gray-400 hover:text-white transition">Pizza</Link>
              <Link href="/category/frames" className="block text-gray-400 hover:text-white transition">Frames</Link>
              <Link href="/category/more" className="block text-gray-400 hover:text-white transition">More Gifts</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition">About Us</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition">Contact</Link>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Delivering to:</p>
              <p className="text-white font-semibold">🇺🇸 USA &amp; 🇨🇦 Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gift4U. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
