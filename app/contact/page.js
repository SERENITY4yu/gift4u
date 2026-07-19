'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl shadow-md p-8">
          <span className="text-6xl block mb-4">✉️</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h1>
          <p className="text-gray-600 text-lg">Thanks for reaching out! We&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-6xl block mb-4">📬</span>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">Have a question? We&apos;d love to hear from you!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-coral"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-coral hover:bg-red-500 text-white font-bold py-3 rounded-full transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl p-6">
            <span className="text-3xl block mb-2">📧</span>
            <h3 className="font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">hello@gift4u.com</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6">
            <span className="text-3xl block mb-2">⏰</span>
            <h3 className="font-bold text-gray-800">Response Time</h3>
            <p className="text-gray-600">We typically respond within 24 hours</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6">
            <span className="text-3xl block mb-2">🌍</span>
            <h3 className="font-bold text-gray-800">Delivering To</h3>
            <p className="text-gray-600">USA & Canada (ordering from anywhere worldwide)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
