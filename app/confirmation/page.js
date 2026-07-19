'use client';

import Link from 'next/link';

export default function ConfirmationPage() {
  const orderNumber = `G4U-${Date.now().toString().slice(-8)}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <span className="text-7xl block mb-6">🎉</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Thank you for your order! Your gift is on its way to brighten someone&apos;s day.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-sm text-gray-500 mb-1">Order Number</p>
          <p className="text-2xl font-bold text-teal">{orderNumber}</p>
        </div>

        <div className="space-y-3 text-left bg-green-50 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-green-800">What happens next:</h3>
          <p className="text-green-700">✓ You&apos;ll receive a confirmation email shortly</p>
          <p className="text-green-700">✓ We&apos;ll prepare your gift with care</p>
          <p className="text-green-700">✓ Delivery tracking will be sent to your email</p>
          <p className="text-green-700">✓ Estimated delivery: 2-5 business days</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-coral hover:bg-red-500 text-white font-bold px-8 py-3 rounded-full transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/contact"
            className="border-2 border-teal text-teal hover:bg-teal hover:text-white font-bold px-8 py-3 rounded-full transition"
          >
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}
