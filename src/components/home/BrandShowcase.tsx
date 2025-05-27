import React from 'react';
import { brands } from '../../data/brands';

const BrandShowcase: React.FC = () => {
  return (
    <section className="border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-around gap-8">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center">
              <span className="text-xl font-semibold uppercase tracking-wider text-gray-800 sm:text-2xl md:text-3xl">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;