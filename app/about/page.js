export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-6xl block mb-4">🎁</span>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Gift4U</h1>
        <p className="text-xl text-gray-600">Connecting hearts across borders, one gift at a time.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Gift4U was born from a simple idea: no matter where you are in the world, you should be able to 
          show your loved ones in the USA and Canada that you care. Whether it&apos;s a birthday, anniversary, 
          holiday, or just because — we make it easy to send beautiful gifts that arrive with love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-pink-50 rounded-2xl p-6 text-center">
          <span className="text-4xl block mb-3">🌍</span>
          <h3 className="font-bold text-gray-800 mb-2">Order from Anywhere</h3>
          <p className="text-gray-600 text-sm">No matter where you are, send gifts to the USA and Canada with ease.</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <span className="text-4xl block mb-3">⚡</span>
          <h3 className="font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">We partner with local services to ensure quick and reliable delivery.</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 text-center">
          <span className="text-4xl block mb-3">💚</span>
          <h3 className="font-bold text-gray-800 mb-2">Made with Love</h3>
          <p className="text-gray-600 text-sm">Every gift is carefully prepared and beautifully packaged.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-coral to-teal rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Gift4U?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <p>✓ Wide selection of gifts</p>
          <p>✓ Secure payment options</p>
          <p>✓ Free delivery on all orders</p>
          <p>✓ Personal gift messages</p>
          <p>✓ Easy checkout process</p>
          <p>✓ Reliable delivery partners</p>
        </div>
      </div>
    </div>
  );
}
