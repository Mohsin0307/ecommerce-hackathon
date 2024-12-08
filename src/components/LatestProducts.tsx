'use client';

import React from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Modern Chair',
    price: '$120',
    imageUrl: '/7.png',
  },
  {
    id: 2,
    title: 'Wooden Table',
    price: '$250',
    imageUrl: '/8.png',
  },
  {
    id: 3,
    title: 'Elegant Sofa',
    price: '$550',
    imageUrl: '/9.png',
  },
  {
    id: 4,
    title: 'Minimalist Lamp',
    price: '$75',
    imageUrl: '/10.png',
  },
  {
    id: 5,
    title: 'Classic Bed Frame',
    price: '$450',
    imageUrl: '/11.png',
  },
  {
    id: 6,
    title: 'Decorative Vase',
    price: '$60',
    imageUrl: '/12.png',
  },
];

const ProductCard: React.FC<Product> = ({ title, price, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* Ensure the image fits perfectly within the card */}
      <div className="w-full h-56 bg-gray-100 flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 mb-4">{price}</p>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

const LatestProducts: React.FC = () => {
  return (
    <section className="p-6 md:p-10 bg-gray-50">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        Latest Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl} id={0}          />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
