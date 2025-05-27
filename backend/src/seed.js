const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Category = require('./models/Category');

dotenv.config();

const categories = [
  { name: 'T-shirts' },
  { name: 'Shorts' },
  { name: 'Shirts' },
  { name: 'Hoodie' },
  { name: 'Jeans' },
];

const products = [
  {
    name: 'T-shirt with Tape Details',
    category: 'T-shirts',
    price: 120,
    rating: 4.5,
    reviewCount: 456,
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    name: 'Skinny Fit Jeans',
    category: 'Jeans',
    price: 240,
    originalPrice: 300,
    discount: 20,
    rating: 4.7,
    reviewCount: 320,
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    name: 'Checkered Shirt',
    category: 'Shirts',
    price: 180,
    rating: 4.3,
    reviewCount: 410,
    image: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    name: 'Sleeve Striped T-shirt',
    category: 'T-shirts',
    price: 130,
    originalPrice: 160,
    discount: 19,
    rating: 4.6,
    reviewCount: 420,
    image: 'https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=600',
    isNew: true
  },
  {
    name: 'Vertical Striped Shirt',
    category: 'Shirts',
    price: 212,
    originalPrice: 252,
    discount: 16,
    rating: 4.8,
    reviewCount: 530,
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600',
    isTopSelling: true
  },
  {
    name: 'Courage Graphic T-shirt',
    category: 'T-shirts',
    price: 145,
    rating: 4.4,
    reviewCount: 420,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
    isTopSelling: true
  },
  {
    name: 'Loose Fit Bermuda Shorts',
    category: 'Shorts',
    price: 80,
    rating: 4.2,
    reviewCount: 350,
    image: 'https://images.pexels.com/photos/1484572/pexels-photo-1484572.jpeg?auto=compress&cs=tinysrgb&w=600',
    isTopSelling: true
  },
  {
    name: 'Faded Skinny Jeans',
    category: 'Jeans',
    price: 210,
    rating: 4.7,
    reviewCount: 440,
    image: 'https://images.pexels.com/photos/1100790/pexels-photo-1100790.jpeg?auto=compress&cs=tinysrgb&w=600',
    isTopSelling: true
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Category.deleteMany();
    await Product.deleteMany();
    await Category.insertMany(categories);
    await Product.insertMany(products);
    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed(); 