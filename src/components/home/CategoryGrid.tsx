import React from 'react';
import { categories } from '../../data/categories';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-wide text-black">
          BROWSE BY DRESS STYLE
        </h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category, index) => (
            <div key={category.id} className={`relative overflow-hidden rounded-lg ${index > 1 ? 'sm:col-span-1' : ''}`}>
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ height: '300px' }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;