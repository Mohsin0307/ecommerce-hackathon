import React from 'react';

const OrderCompleted: React.FC = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Left Corner: Clock Icon */}
      <div className="absolute top-10 left-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
          <i className="fas fa-clock text-blue-600 text-2xl"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mx-auto">
          <i className="fas fa-check text-pink-500 text-3xl"></i>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mt-6">Your Order Is Completed!</h1>
        <p className="text-gray-600 mt-4 leading-relaxed max-w-md mx-auto">
          Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.
        </p>
        <button className="mt-6 px-8 py-3 bg-red-500 text-white rounded-md text-lg font-semibold shadow hover:bg-red-600 transition">
          Continue Shopping
        </button>
      </div>

      {/* Bottom Right Corner: Book and Pencil Icon */}
      <div className="absolute bottom-10 right-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
          <i className="fas fa-book text-purple-600 text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
