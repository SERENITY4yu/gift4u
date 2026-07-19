export const categories = [
  { id: 'flowers', name: 'Flowers', emoji: '💐', color: 'bg-pink-100', description: 'Beautiful bouquets for every occasion' },
  { id: 'jewelry', name: 'Jewelry', emoji: '💍', color: 'bg-purple-100', description: 'Elegant pieces to treasure forever' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕', color: 'bg-yellow-100', description: 'Delicious pizza delivered hot' },
  { id: 'frames', name: 'Frames', emoji: '🖼️', color: 'bg-blue-100', description: 'Capture memories beautifully' },
  { id: 'more', name: 'More Gifts', emoji: '🎁', color: 'bg-green-100', description: 'Explore more amazing gift ideas' },
];

export const products = [
  // Flowers
  { id: 1, name: 'Sunshine Bouquet', category: 'flowers', price: 49.99, emoji: '🌻', color: 'bg-yellow-200', description: 'A bright and cheerful arrangement of sunflowers and daisies that will light up any room.', rating: 4.8 },
  { id: 2, name: 'Red Rose Romance', category: 'flowers', price: 69.99, emoji: '🌹', color: 'bg-red-200', description: 'Classic dozen red roses, perfect for expressing love and admiration.', rating: 4.9 },
  { id: 3, name: 'Spring Garden Mix', category: 'flowers', price: 54.99, emoji: '🌷', color: 'bg-pink-200', description: 'A colorful mix of tulips, lilies, and carnations celebrating the beauty of spring.', rating: 4.7 },
  { id: 4, name: 'Peaceful Orchid', category: 'flowers', price: 79.99, emoji: '🪻', color: 'bg-purple-200', description: 'An elegant orchid plant that brings tranquility and sophistication to any space.', rating: 4.9 },

  // Jewelry
  { id: 5, name: 'Silver Heart Necklace', category: 'jewelry', price: 89.99, emoji: '💎', color: 'bg-sky-200', description: 'A delicate sterling silver heart pendant on a fine chain. Timeless elegance.', rating: 4.8 },
  { id: 6, name: 'Gold Hoop Earrings', category: 'jewelry', price: 129.99, emoji: '✨', color: 'bg-yellow-200', description: '14K gold-plated hoop earrings. Classic style that goes with everything.', rating: 4.7 },
  { id: 7, name: 'Charm Bracelet', category: 'jewelry', price: 69.99, emoji: '📿', color: 'bg-rose-200', description: 'A beautiful charm bracelet with customizable charms. Tell your story.', rating: 4.6 },
  { id: 8, name: 'Diamond Stud Earrings', category: 'jewelry', price: 199.99, emoji: '💠', color: 'bg-indigo-200', description: 'Sparkling cubic zirconia studs set in sterling silver. Brilliant shine.', rating: 4.9 },

  // Pizza
  { id: 9, name: 'Classic Margherita', category: 'pizza', price: 18.99, emoji: '🍕', color: 'bg-red-100', description: 'Fresh mozzarella, tomato sauce, and basil on a hand-tossed crust.', rating: 4.7 },
  { id: 10, name: 'Pepperoni Supreme', category: 'pizza', price: 22.99, emoji: '🍕', color: 'bg-orange-200', description: 'Loaded with pepperoni, extra cheese, and our signature sauce.', rating: 4.8 },
  { id: 11, name: 'Veggie Delight', category: 'pizza', price: 20.99, emoji: '🥬', color: 'bg-green-200', description: 'Fresh vegetables, olives, mushrooms, and bell peppers on a crispy crust.', rating: 4.6 },
  { id: 12, name: 'BBQ Chicken', category: 'pizza', price: 24.99, emoji: '🍗', color: 'bg-amber-200', description: 'Grilled chicken, BBQ sauce, red onions, and cilantro. A crowd favorite.', rating: 4.8 },

  // Frames
  { id: 13, name: 'Classic Wood Frame', category: 'frames', price: 34.99, emoji: '🖼️', color: 'bg-amber-100', description: 'Beautiful solid wood frame, perfect for 8x10 photos. Natural finish.', rating: 4.7 },
  { id: 14, name: 'Modern Metal Frame', category: 'frames', price: 44.99, emoji: '🪞', color: 'bg-gray-200', description: 'Sleek brushed metal frame with a contemporary feel. Fits 5x7 photos.', rating: 4.6 },
  { id: 15, name: 'Collage Frame Set', category: 'frames', price: 59.99, emoji: '🎨', color: 'bg-teal-100', description: 'Set of 4 matching frames for creating a beautiful wall gallery.', rating: 4.8 },
  { id: 16, name: 'Digital Photo Frame', category: 'frames', price: 89.99, emoji: '📱', color: 'bg-blue-200', description: '10-inch digital frame that displays your favorite photos in a slideshow.', rating: 4.9 },

  // More Gifts
  { id: 17, name: 'Scented Candle Set', category: 'more', price: 39.99, emoji: '🕯️', color: 'bg-orange-100', description: 'Set of 3 premium soy candles in lavender, vanilla, and ocean breeze.', rating: 4.7 },
  { id: 18, name: 'Gourmet Chocolate Box', category: 'more', price: 49.99, emoji: '🍫', color: 'bg-amber-200', description: 'Assortment of 24 handcrafted chocolates in a beautiful gift box.', rating: 4.9 },
  { id: 19, name: 'Spa Gift Basket', category: 'more', price: 74.99, emoji: '🧴', color: 'bg-pink-100', description: 'Luxurious bath bombs, lotions, and essential oils for the ultimate relaxation.', rating: 4.8 },
  { id: 20, name: 'Teddy Bear & Card', category: 'more', price: 29.99, emoji: '🧸', color: 'bg-rose-100', description: 'An adorable plush teddy bear with a personalized greeting card.', rating: 4.6 },
];

export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}
