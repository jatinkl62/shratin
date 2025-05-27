import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  reviewCount
}) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`star-${i}`} className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <StarHalf key="half-star\" className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} />
    );
  }

  // Empty stars
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-star-${i}`} className={`${sizeClasses[size]} text-gray-300`} />
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showValue && <span className="ml-1 text-sm font-medium text-gray-700">{value.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="ml-1 text-sm text-gray-500">({reviewCount})</span>
      )}
    </div>
  );
};

export default Rating;