import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ui/ProductCard';

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
const colors = [
  { name: 'Red', value: '#ff0000' },
  { name: 'Green', value: '#00ff00' },
  { name: 'Blue', value: '#0000ff' },
  { name: 'Yellow', value: '#ffff00' },
  { name: 'Orange', value: '#ffa500' },
  { name: 'Purple', value: '#800080' },
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#ffffff' },
  { name: 'Pink', value: '#ffc0cb' },
];
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [selectedCategory, setSelectedCategory] = useState(categoryName || 'Casual');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('Casual');
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5008/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Filter products by category (from backend data)
  const filteredProducts = products.filter(
    (p) =>
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedSize || true) && // Add size logic if needed
      (!selectedColor || true) && // Add color logic if needed
      (!selectedStyle || true) // Add style logic if needed
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className="w-64 hidden lg:block">
          <div className="bg-white rounded-lg shadow p-6 sticky top-8">
            <h3 className="font-bold mb-4">Filters</h3>
            <div className="mb-6">
              <div className="font-semibold mb-2">Category</div>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`text-left w-full px-2 py-1 rounded ${selectedCategory === cat ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Price</div>
              <div className="flex items-center gap-2">
                <span>₹{priceRange[0]}</span>
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={priceRange[0]}
                  onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                  className="w-20"
                />
                <input
                  type="range"
                  min={0}
                  max={500}
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                  className="w-20"
                />
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Colors</div>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color.value ? 'border-black' : 'border-gray-200'}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-1 rounded border text-xs ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Dress Style</div>
              <ul className="space-y-1">
                {dressStyles.map((style) => (
                  <li key={style}>
                    <button
                      className={`text-left w-full px-2 py-1 rounded ${selectedStyle === style ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedStyle(style)}
                    >
                      {style}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-black text-white py-2 rounded font-semibold mt-4">Apply Filter</button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{selectedCategory}</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Showing 1-10 of {filteredProducts.length} Products</span>
              <span className="ml-4">Sort by:</span>
              <select className="border rounded px-2 py-1">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center py-20">Loading...</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button className="px-4 py-2 rounded border" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(num => (
                <button
                  key={num}
                  className={`px-3 py-1 rounded ${page === num ? 'bg-black text-white' : 'bg-white text-black border'}`}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 rounded border" onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage; 