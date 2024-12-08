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
  { id: 1, title: 'Accumsan tincidunt', price: '$60.00', oldPrice: '$80.00', imageUrl: '/images/product1.jpg', rating: 5 },
  { id: 2, title: 'In nulla', price: '$50.00', oldPrice: '$70.00', imageUrl: '/images/product2.jpg', rating: 4 },
  { id: 3, title: 'Vel sem', price: '$60.00', oldPrice: '$90.00', imageUrl: '/images/product3.jpg', rating: 5 },
  { id: 4, title: 'Porttitor cum', price: '$80.00', oldPrice: '$100.00', imageUrl: '/images/product4.jpg', rating: 5 },
  { id: 5, title: 'Nunc in', price: '$75.00', oldPrice: '$95.00', imageUrl: '/images/product5.jpg', rating: 4 },
  { id: 6, title: 'Vitae facilisis', price: '$90.00', oldPrice: '$120.00', imageUrl: '/images/product6.jpg', rating: 5 },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <div className="text-purple-600 font-bold">{product.price}</div>
            <div className="text-gray-500 line-through">{product.oldPrice}</div>
          </div>
          <div className="mt-3 flex items-center text-yellow-500">
            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
