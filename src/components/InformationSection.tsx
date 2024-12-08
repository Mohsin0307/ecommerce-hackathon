import React from "react";

const InformationSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Information About Us */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Information About Us</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor lobortis. Accumsan
          faucibus vitae lobortis quis bibendum quam.
        </p>
        <div className="flex space-x-4 mt-4">
          <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Contact Way */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact Way</h2>
        <div className="space-y-2 text-gray-600">
          <p>📞 Tel: 877-67-88-99</p>
          <p>📧 Email: shop@store.com</p>
          <p>📍 20 Margaret St, London, UK</p>
        </div>
        <div className="space-y-2 mt-6">
          <p>✔️ Support Forum - Available 24/7</p>
          <p>🚚 Free Standard Shipping on all orders</p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
