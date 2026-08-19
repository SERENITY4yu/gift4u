export const categories = [
  { id: 'flowers', name: 'Flowers', image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', description: 'Beautiful bouquets for every occasion' },
  { id: 'jewelry', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=600&h=400&fit=crop', description: 'Elegant pieces to treasure forever' },
  { id: 'pizza', name: 'Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', description: 'Delicious pizza delivered hot' },
  { id: 'frames', name: 'Frames', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&h=400&fit=crop', description: 'Capture memories beautifully' },
  { id: 'more', name: 'More Gifts', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238f4e1?w=600&h=400&fit=crop', description: 'Explore more amazing gift ideas' },
];

export const products = [
  // Flowers
  { id: 1, name: 'Sunshine Bouquet', category: 'flowers', price: 49.99, image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=500&h=500&fit=crop', description: 'A bright and cheerful arrangement of sunflowers and daisies that will light up any room.', rating: 4.8 },
  { id: 2, name: 'Red Rose Romance', category: 'flowers', price: 69.99, image: 'https://images.unsplash.com/photo-1490750967868-88aa4f44f45a?w=500&h=500&fit=crop', description: 'Classic dozen red roses, perfect for expressing love and admiration.', rating: 4.9 },
  { id: 3, name: 'Spring Garden Mix', category: 'flowers', price: 54.99, image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&h=500&fit=crop', description: 'A colorful mix of tulips, lilies, and carnations celebrating the beauty of spring.', rating: 4.7 },
  { id: 4, name: 'Peaceful Orchid', category: 'flowers', price: 79.99, image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=500&h=500&fit=crop', description: 'An elegant orchid plant that brings tranquility and sophistication to any space.', rating: 4.9 },

  // Jewelry
  { id: 5, name: 'Silver Heart Necklace', category: 'jewelry', price: 89.99, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop', description: 'A delicate sterling silver heart pendant on a fine chain. Timeless elegance.', rating: 4.8 },
  { id: 6, name: 'Gold Hoop Earrings', category: 'jewelry', price: 129.99, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=500&fit=crop', description: '14K gold-plated hoop earrings. Classic style that goes with everything.', rating: 4.7 },
  { id: 7, name: 'Charm Bracelet', category: 'jewelry', price: 69.99, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop', description: 'A beautiful charm bracelet with customizable charms. Tell your story.', rating: 4.6 },
  { id: 8, name: 'Diamond Stud Earrings', category: 'jewelry', price: 199.99, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop', description: 'Sparkling cubic zirconia studs set in sterling silver. Brilliant shine.', rating: 4.9 },

  // Pizza
  { id: 9, name: 'Classic Margherita', category: 'pizza', price: 18.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=500&fit=crop', description: 'Fresh mozzarella, tomato sauce, and basil on a hand-tossed crust.', rating: 4.7 },
  { id: 10, name: 'Pepperoni Supreme', category: 'pizza', price: 22.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=500&fit=crop', description: 'Loaded with pepperoni, extra cheese, and our signature sauce.', rating: 4.8 },
  { id: 11, name: 'Veggie Delight', category: 'pizza', price: 20.99, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=500&h=500&fit=crop', description: 'Fresh vegetables, olives, mushrooms, and bell peppers on a crispy crust.', rating: 4.6 },
  { id: 12, name: 'BBQ Chicken', category: 'pizza', price: 24.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop', description: 'Grilled chicken, BBQ sauce, red onions, and cilantro. A crowd favorite.', rating: 4.8 },

  // Frames
  { id: 13, name: 'Classic Wood Frame', category: 'frames', price: 34.99, image: 'https://images.unsplash.com/photo-1582053433643-b6e0be0e1ab5?w=500&h=500&fit=crop', description: 'Beautiful solid wood frame, perfect for 8x10 photos. Natural finish.', rating: 4.7 },
  { id: 14, name: 'Modern Metal Frame', category: 'frames', price: 44.99, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&h=500&fit=crop', description: 'Sleek brushed metal frame with a contemporary feel. Fits 5x7 photos.', rating: 4.6 },
  { id: 15, name: 'Collage Frame Set', category: 'frames', price: 59.99, image: 'https://images.unsplash.com/photo-1596003903685-6a6c05d5e903?w=500&h=500&fit=crop', description: 'Set of 4 matching frames for creating a beautiful wall gallery.', rating: 4.8 },
  { id: 16, name: 'Digital Photo Frame', category: 'frames', price: 89.99, image: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=500&h=500&fit=crop', description: '10-inch digital frame that displays your favorite photos in a slideshow.', rating: 4.9 },

  // More Gifts
  { id: 17, name: 'Scented Candle Set', category: 'more', price: 39.99, image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=500&h=500&fit=crop', description: 'Set of 3 premium soy candles in lavender, vanilla, and ocean breeze.', rating: 4.7 },
  { id: 18, name: 'Gourmet Chocolate Box', category: 'more', price: 49.99, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&h=500&fit=crop', description: 'Assortment of 24 handcrafted chocolates in a beautiful gift box.', rating: 4.9 },
  { id: 19, name: 'Spa Gift Basket', category: 'more', price: 74.99, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=500&fit=crop', description: 'Luxurious bath bombs, lotions, and essential oils for the ultimate relaxation.', rating: 4.8 },
  { id: 20, name: 'Teddy Bear & Card', category: 'more', price: 29.99, image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=500&h=500&fit=crop', description: 'An adorable plush teddy bear with a personalized greeting card.', rating: 4.6 },
];

export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}
