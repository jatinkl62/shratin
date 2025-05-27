const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: Number,
  discount: Number,
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  image: String,
  isNew: Boolean,
  isTopSelling: Boolean,
});

module.exports = mongoose.model('Product', productSchema); 