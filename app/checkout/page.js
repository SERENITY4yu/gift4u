'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientAddress: '',
    recipientCity: '',
    recipientState: '',
    recipientZip: '',
    recipientCountry: 'USA',
    giftMessage: '',
  });

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Nothing to checkout</h1>
        <Link href="/" className="text-coral hover:underline">Go shopping →</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    router.push('/confirmation');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout 💳</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Sender Info */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Info (Sender)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="senderName"
                placeholder="Your Name"
                required
                value={formData.senderName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <input
                type="email"
                name="senderEmail"
                placeholder="Your Email"
                required
                value={formData.senderEmail}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral"
              />
            </div>
          </div>

          {/* Recipient Info */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recipient Details 📬</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="recipientName"
                placeholder="Recipient's Full Name"
                required
                value={formData.recipientName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="text"
                name="recipientAddress"
                placeholder="Street Address"
                required
                value={formData.recipientAddress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  name="recipientCity"
                  placeholder="City"
                  required
                  value={formData.recipientCity}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <input
                  type="text"
                  name="recipientState"
                  placeholder="State/Province"
                  required
                  value={formData.recipientState}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <input
                  type="text"
                  name="recipientZip"
                  placeholder="ZIP Code"
                  required
                  value={formData.recipientZip}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <select
                  name="recipientCountry"
                  value={formData.recipientCountry}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                >
                  <option value="USA">🇺🇸 USA</option>
                  <option value="Canada">🇨🇦 Canada</option>
                </select>
              </div>
              <textarea
                name="giftMessage"
                placeholder="Add a personal gift message (optional) 💌"
                value={formData.giftMessage}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition ${
                  paymentMethod === 'stripe' ? 'border-coral bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <span className="text-2xl mr-3">💳</span>
                <div>
                  <p className="font-semibold">Credit/Debit Card</p>
                  <p className="text-sm text-gray-500">Visa, Mastercard, Amex + Apple Pay & Google Pay</p>
                </div>
              </label>

              <label
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition ${
                  paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <span className="text-2xl mr-3">🅿️</span>
                <div>
                  <p className="font-semibold">PayPal</p>
                  <p className="text-sm text-gray-500">Pay securely with your PayPal account</p>
                </div>
              </label>

              <label
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition ${
                  paymentMethod === 'crypto' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="crypto"
                  checked={paymentMethod === 'crypto'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                <span className="text-2xl mr-3">₿</span>
                <div>
                  <p className="font-semibold">Cryptocurrency</p>
                  <p className="text-sm text-gray-500">Bitcoin, Ethereum, USDT and more</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.emoji} {item.name} x{item.quantity}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Delivery</span>
                <span className="text-green-500 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-800 mt-4">
                <span>Total</span>
                <span className="text-teal">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-coral hover:bg-red-500 text-white font-bold py-4 rounded-full text-lg transition hover:shadow-lg"
            >
              Place Order 🎉
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Secure checkout. Your payment info is encrypted.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
