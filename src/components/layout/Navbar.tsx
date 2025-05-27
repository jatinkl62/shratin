import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top announcement bar */}
      <div className="bg-black px-4 py-2 text-center text-xs text-white">
        <p>
          Sign up and get 20% off to your first order.{' '}
          <a href="#" className="underline">
            Sign Up Now
          </a>
        </p>
      </div>

      {/* Main navigation */}
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-lg font-bold uppercase tracking-widest sm:text-xl">SHRATIN.COM</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/category/T-shirts" className="text-sm font-medium text-black hover:text-gray-700">
              Shop
            </Link>
            <Link to="/category/T-shirts" className="text-sm font-medium text-black hover:text-gray-700">
              On Sale
            </Link>
            <Link to="/category/T-shirts" className="text-sm font-medium text-black hover:text-gray-700">
              New Arrivals
            </Link>
            <Link to="/category/T-shirts" className="text-sm font-medium text-black hover:text-gray-700">
              Brands
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <button className="hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:block">
              <Search className="h-5 w-5" />
            </button>
            <button className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
              <div className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                  0
                </span>
              </div>
            </button>
            <button className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            <div className="mb-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            <Link to="/category/T-shirts" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-50">
              Shop
            </Link>
            <Link to="/category/T-shirts" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-50">
              On Sale
            </Link>
            <Link to="/category/T-shirts" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-50">
              New Arrivals
            </Link>
            <Link to="/category/T-shirts" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-50">
              Brands
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;