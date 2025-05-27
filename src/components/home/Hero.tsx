import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-8 sm:py-16">
      <div className="px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>
            <p className="mt-4 text-sm text-gray-600 sm:text-base">
              Browse through our collection of meticulously crafted garments, designed 
              to bring out your individuality and cater to your sense of style.
            </p>
            <div className="mt-6 sm:mt-8">
              <Button size="lg" className="w-full px-8 sm:w-auto">
                Shop Now
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-12">
              <div className="text-center">
                <p className="text-xl font-bold sm:text-2xl">200+</p>
                <p className="text-xs text-gray-600 sm:text-sm">International Brands</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold sm:text-2xl">2,000+</p>
                <p className="text-xs text-gray-600 sm:text-sm">High-Quality Products</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold sm:text-2xl">30,000+</p>
                <p className="text-xs text-gray-600 sm:text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0 md:order-last">
            <div className="relative h-[300px] w-full sm:h-[400px] md:h-[500px]">
              <img
                src="https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Fashion model showcase"
                className="h-full w-full rounded-lg object-cover"
              />
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-black sm:h-16 sm:w-16" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-black sm:h-20 sm:w-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;