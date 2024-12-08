'use client';

import React from 'react';

const WhatShopexOffers: React.FC = () => {
  return (
    <section className="p-6 md:p-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        What Shopex Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow-md text-center">
          <img
            src="/13.png" // Replace with your actual icon URL
            alt="24/7 Support"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h3 className="font-semibold">24/7 Support</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <img
            src="/18.png" // Replace with your actual icon URL
            alt="Fast Delivery"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h3 className="font-semibold">Fast Delivery</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <img
            src="/15.png" // Replace with your actual icon URL
            alt="Easy Returns"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h3 className="font-semibold">Easy Returns</h3>
        </div>
        <div className="bg-white p-6 shadow-md text-center">
          <img
            src="/16.png" // Replace with your actual icon URL
            alt="Secure Payment"
            className="mx-auto mb-4 h-16 w-16 object-contain"
          />
          <h3 className="font-semibold">Secure Payment</h3>
        </div>
      </div>
    </section>
  );
};

export default WhatShopexOffers;
