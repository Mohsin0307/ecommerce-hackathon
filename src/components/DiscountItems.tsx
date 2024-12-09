import React from 'react';

const DiscountItems: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8">
          Discount Item
        </h1>

        {/* Links Section */}
        <div className="flex justify-center gap-6 text-gray-700 text-sm font-medium mb-8">
          <a href="#" className="hover:text-red-500">
            Wood Chair
          </a>
          <a href="#" className="hover:text-red-500">
            Plastic Chair
          </a>
          <a href="#" className="hover:text-red-500">
            Sofa Collection
          </a>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-left">
            {/* Discount Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              20% Discount On All Products
            </h2>
            {/* Product Name */}
            <p className="text-red-500 text-lg font-semibold mb-4">Eams Sofa Compact</p>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.
            </p>
            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-800">
              <p>✅ Material expose like metals</p>
              <p>✅ Clear lines and geometric figures</p>
              <p>✅ Simple neutral colours</p>
              <p>✅ Material expose like metals</p>
            </div>
            {/* Button */}
            <button className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Shop Now
            </button>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute top-0 left-0 w-[90%] h-[90%] bg-pink-200 rounded-full transform translate-x-6 translate-y-6 -z-10"></div>
              <img
                src="/221.png"
                alt="Discounted Chair"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItems;
