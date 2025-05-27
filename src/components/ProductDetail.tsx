import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './ui/Rating';

const mockColors = [
  { name: 'Olive', value: '#535353' },
  { name: 'Cream', value: '#d9d7c7' },
  { name: 'Purple', value: '#3d3b6d' },
  { name: 'Navy', value: '#232b4d' },
];
const mockSizes = ['Small', 'Medium', 'Large', 'X-Large'];
const mockGallery = [
  (product: any) => product?.image,
  () => 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=600',
  () => 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600',
  () => 'https://images.pexels.com/photos/532221/pexels-photo-532221.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // Default to 'Large'
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:5008/api/products/by-custom-id/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
        setSelectedImage(0);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p>{error || 'The product you are looking for does not exist.'}</p>
      </div>
    );
  }

  const galleryImages = mockGallery.map(fn => fn(product));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
          <div className="flex md:flex-col gap-3 md:gap-4 order-2 md:order-1 justify-center md:justify-start">
            {galleryImages.map((img, idx) => (
              <button
                key={img}
                className={`border rounded-lg overflow-hidden w-16 h-16 md:w-20 md:h-20 focus:outline-none ${selectedImage === idx ? 'border-black' : 'border-gray-200'}`}
                onClick={() => setSelectedImage(idx)}
                aria-label={`Show image ${idx + 1}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          <div className="flex-1 order-1 md:order-2 flex items-center justify-center">
            <img src={galleryImages[selectedImage]} alt={product.name} className="rounded-lg w-full max-w-md object-cover" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl font-bold mb-2 uppercase">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Rating value={product.rating} reviewCount={product.reviewCount} />
            <span className="text-gray-500 text-sm">/ 5</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-black">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="text-lg font-medium text-red-500">-{product.discount}%</span>
            )}
          </div>
          <p className="mb-6 text-gray-700">This is a sample product description for {product.name}. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          {/* Color Selector */}
          <div className="mb-4">
            <div className="font-semibold mb-2">Select Colors</div>
            <div className="flex gap-3">
              {mockColors.map((color, idx) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === idx ? 'border-black' : 'border-gray-200'}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(idx)}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>
          {/* Size Selector */}
          <div className="mb-4">
            <div className="font-semibold mb-2">Choose Size</div>
            <div className="flex gap-3">
              {mockSizes.map((size, idx) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-md border text-sm font-medium ${selectedSize === idx ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}
                  onClick={() => setSelectedSize(idx)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity Selector & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >-</button>
              <span className="px-4 py-2 min-w-[32px] text-center">{quantity}</span>
              <button
                className="px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                onClick={() => setQuantity(q => q + 1)}
                aria-label="Increase quantity"
              >+</button>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-black/90 transition text-base">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 