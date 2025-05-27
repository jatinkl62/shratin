import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import BrandShowcase from './components/home/BrandShowcase';
import ProductsGrid from './components/home/ProductsGrid';
import CategoryGrid from './components/home/CategoryGrid';
import Testimonials from './components/home/Testimonials';
import Footer from './components/layout/Footer';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';

function App() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('http://localhost:5008/api/products?isNew=true').then(res => res.json()),
      fetch('http://localhost:5008/api/products?isTopSelling=true').then(res => res.json())
    ]).then(([newArrivalsData, topSellingData]) => {
      setNewArrivals(newArrivalsData);
      setTopSelling(topSellingData);
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              loading ? <div className="flex justify-center items-center py-20">Loading...</div> :
              <>
                <Hero />
                <BrandShowcase />
                <ProductsGrid title="NEW ARRIVALS" products={newArrivals} />
                <ProductsGrid title="TOP SELLING" products={topSelling} />
                <CategoryGrid />
                <Testimonials />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;