import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import Rating from '../ui/Rating';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-black">
          OUR HAPPY CUSTOMERS
        </h2>
        
        <div className="relative">
          <div className="mx-auto max-w-4xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="rounded-lg bg-white p-6 shadow-sm">
                    <div className="mb-4 flex justify-center">
                      <Rating value={testimonial.rating} size="lg" />
                    </div>
                    <p className="mb-6 text-center text-gray-700">"{testimonial.comment}"</p>
                    <div className="flex flex-col items-center">
                      <div className="mb-3 h-16 w-16 overflow-hidden rounded-full">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h4 className="font-medium text-black">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="mt-1 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          Verified Customer
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;