'use client';

import React from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  rating: number;
}

const products: Product[] = [
  { id: 1, title: 'Accumsan tincidunt', price: '$60.00', oldPrice: '$80.00', imageUrl: '/r1.png', rating: 5 },
  { id: 2, title: 'In nulla', price: '$50.00', oldPrice: '$70.00', imageUrl: '/r2.png', rating: 4 },
  { id: 3, title: 'Vel sem', price: '$60.00', oldPrice: '$90.00', imageUrl: '/r3.png', rating: 5 },
  { id: 4, title: 'Porttitor cum', price: '$80.00', oldPrice: '$100.00', imageUrl: '/r4.png', rating: 5 },
  { id: 5, title: 'Nunc in', price: '$75.00', oldPrice: '$95.00', imageUrl: '/r5.png', rating: 4 },
  { id: 6, title: 'Vitae facilisis', price: '$90.00', oldPrice: '$120.00', imageUrl: '/r6.png', rating: 5 },
];

const ProductList: React.FC = () => {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex bg-white p-4 shadow rounded-lg hover:shadow-lg transition w-full max-w-4xl mx-auto"
        >
          {/* Left Div: Image */}
          <div className="w-1/4">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Div: Product Details */}
          <div className="ml-6 w-3/4 flex flex-col justify-between">
            <div>
              {/* Title with dots */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                </div>
              </div>

              {/* Prices */}
              <div className="flex items-center mt-2">
                <span className="text-purple-600 font-bold mr-2">{product.price}</span>
                <span className="text-gray-500 line-through">{product.oldPrice}</span>
              </div>

              {/* Rating */}
              <div className="mt-1 text-yellow-500 text-sm">
                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
                phasellus non in justo.
              </p>
            </div>

            {/* Icons */}
            <div className="flex space-x-6 mt-4">
              <button className="text-purple-600 hover:text-purple-800">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="text-purple-600 hover:text-purple-800">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-purple-600 hover:text-purple-800">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
