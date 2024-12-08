import React from 'react';

const DiscountItems: React.FC = () => {
  return (
    <section className="bg-yellow-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <img src="/21.png" alt="Discount Chair" className="w-full md:w-1/2 rounded-md shadow-md" />
        <div>
          <h2 className="text-3xl font-bold mb-4">20% Discount On All Products</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default DiscountItems;
