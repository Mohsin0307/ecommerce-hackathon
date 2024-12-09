import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Blog Post */}
          {[1, 2, 3].map((post, index) => (
            <div
              key={post}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200"
            >
              <img
                src={`/b${index + 1}.png`}
                alt={`Blog Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span>Surf Auction</span>
                  <span>Aug 09 2020</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mt-2">
                  Blog Post Title {index + 1}
                </h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque viverra vehicula sem ut volutpat.
                </p>
                <a
                  href="#"
                  className="text-pink-500 mt-2 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Search Box */}
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search for posts..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Categories */}
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {["Women", "Men", "Kids", "Accessories", "Shoes", "Bags"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="text-gray-600 hover:text-pink-500 cursor-pointer"
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Posts
            </h3>
            {[4, 5, 6, 7].map((imgIndex) => (
              <div key={imgIndex} className="flex items-center mb-4">
                <img
                  src={`/b${imgIndex}.png`}
                  alt={`Recent Post ${imgIndex}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-800">Post Title {imgIndex}</p>
                  <span className="text-gray-500 text-sm">Aug 09 2020</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sale Products */}
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Sale Products
            </h3>
            {[8, 9, 10, 11].map((imgIndex) => (
              <div key={imgIndex} className="flex items-center mb-4">
                <img
                  src={`/b${imgIndex}.png`}
                  alt={`Sale Product ${imgIndex}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-800">Product Name {imgIndex}</p>
                  <span className="text-gray-500 text-sm">$20.00</span>
                </div>
              </div>
            ))}
          </div>

          {/* Offer Products */}
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Offer Products
            </h3>
            {[12, 13, 14].map((imgIndex) => (
              <div key={imgIndex} className="flex items-center mb-4">
                <img
                  src={`/b${imgIndex}.png`}
                  alt={`Offer Product ${imgIndex}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-800">Offer Product {imgIndex}</p>
                  <span className="text-gray-500 text-sm">$15.00</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-2">
          {[1, 2, 3, 4].map((number) => (
            <li
              key={number}
              className="px-4 py-2 bg-white shadow-md border border-gray-300 rounded-md cursor-pointer hover:bg-pink-500 hover:text-white"
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
