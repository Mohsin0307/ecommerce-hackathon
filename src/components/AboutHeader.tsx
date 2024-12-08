import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="text-lg text-gray-600">
        Learn about our e-commerce business, its history, and values.
      </p>
      <button className="px-6 py-3 mt-4 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600">
        Contact Us
      </button>
    </div>
  );
};

export default AboutHeader;
