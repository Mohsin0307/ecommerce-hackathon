'use client';

import React from 'react';
import ProductList from '@/components/ProductList';

const ShopList: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="py-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Shop List</h1>
          <p className="text-sm text-gray-600">
            <span className="text-purple-600">Home</span> &gt; Pages &gt; Shop List
          </p>
        </div>
      </div>

      {/* Product List Section */}
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-xl font-medium text-gray-800">
            Ecommerce Accessories & Fashion items
          </h2>
          <div className="flex gap-4 items-center">
            <label htmlFor="sort" className="text-gray-600">Sort By:</label>
            <select
              id="sort"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-600"
            >
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        <ProductList />
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-600">&copy; 2024 Webbyey. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-purple-600">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopList;
