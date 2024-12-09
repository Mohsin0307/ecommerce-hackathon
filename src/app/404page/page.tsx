"use client"
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-center">
        {/* 404 Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Not Found</h1>
        <p className="text-gray-500 mb-6">
          Oops! The page you requested was not found.
        </p>
        {/* Illustration */}
        <div className="mb-6">
          <img
            src="/444.png"
            alt="404 Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
        {/* Back to Home Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
