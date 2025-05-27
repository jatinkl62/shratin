import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../data/products';
import Rating from './Rating';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, originalPrice, discount, rating, reviewCount, image } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter') handleClick(); }}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="text-sm font-medium text-gray-900 sm:text-base">{name}</h3>
        <div className="mt-1">
          <Rating value={rating} reviewCount={reviewCount} size="sm" />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="font-semibold text-black">₹{price}</span>
          {originalPrice && (
            <span className="text-xs text-gray-500 line-through sm:text-sm">₹{originalPrice}</span>
          )}
          {discount && (
            <span className="text-xs font-medium text-red-500 sm:text-sm">-{discount}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;