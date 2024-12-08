import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ProductDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Parent Wrapper */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="flex gap-4 w-full lg:w-1/2">
          {/* Small Images (Vertical) */}
          <div className="flex flex-col gap-4">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="/pd7.png"
                alt="Small Product 1"
                className="h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="/pd6.png"
                alt="Small Product 2"
                className="h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src="/pd5.png"
                alt="Small Product 3"
                className="h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="flex-grow h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="/pd8.png"
              alt="Main Product"
              className="h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <h1 className="text-2xl font-semibold mb-2">Playwood Arm Chair</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            <span className="ml-2 text-sm text-gray-500">(22 reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold mb-4 text-gray-800">
            $320.00 <span className="line-through text-gray-400">$400.00</span>
          </div>

          {/* Color */}
          <div className="mb-4">
            <span className="text-gray-600">Color:</span>
            <div className="flex gap-2 mt-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>

          {/* Add to Cart & Wishlist */}
          <div className="flex gap-4 mb-4">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-gray-200 rounded-lg">❤️</button>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <span className="text-gray-600">Categories: </span> Furniture, Home
          </div>

          {/* Tags */}
          <div className="mb-4">
            <span className="text-gray-600">Tags: </span> Chair, Wood, Modern
          </div>

          {/* Share */}
          <div className="flex gap-4 items-center">
            <span className="text-gray-600">Share:</span>
            <FaFacebook className="text-blue-500 w-6 h-6 cursor-pointer" />
            <FaTwitter className="text-sky-500 w-6 h-6 cursor-pointer" />
            <FaInstagram className="text-pink-500 w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex gap-4 border-b mb-4">
          <button className="pb-2 border-b-2 border-purple-600">Description</button>
          <button className="pb-2 text-gray-500">Additional Info</button>
          <button className="pb-2 text-gray-500">Reviews</button>
          <button className="pb-2 text-gray-500">Video</button>
        </div>
        <div>
          <p className="text-gray-600">
            Aliquam dui volutpat vulputate integer sagittis. Faucibus dui diam
            arcu, nulla lobortis justo nunc nec. Eu fringilla vulputate nunc nec.
            Duis massa viverra.
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          {["/pd1.png", "/pd2.png", "/pd3.png", "/pd4.png"].map((imgPath, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col items-center"
            >
              <div className="h-48 bg-gray-100 w-full rounded-lg flex items-center justify-center mb-4">
                <img
                  src={imgPath}
                  alt={`Related Product ${index + 1}`}
                  className="h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Product Title</h3>
              <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-lg font-bold text-gray-800">$50.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
