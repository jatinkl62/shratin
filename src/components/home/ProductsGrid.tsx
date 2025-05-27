import React from 'react';
import { Product } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

interface ProductsGridProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  title,
  products,
  showViewAll = true
}) => {
  return (
    <section className="py-8 sm:py-16">
      <div className="px-4">
        <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-wide text-black sm:mb-8 sm:text-3xl">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-8 flex justify-center sm:mt-12">
            <Button variant="outline" className="w-full sm:w-auto">
              View All
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsGrid;