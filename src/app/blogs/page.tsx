import React from "react";

const SingleBlog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Page Title */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Single Blog</h1>
        <p className="text-gray-500">Home &gt; Pages &gt; Single Blog</p>
      </div>

      {/* Parent Layout for Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src="/b1.png"
            alt="Main Image"
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">
            Mauris at orci non vulputate diam tincidunt nec.
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim.
          </p>
          <p className="text-gray-600">
            Adipiscing purus, cursus vulputate id id dictum at. Velit dapibus
            est, nunc, montes, lacus consequat integer viverra.
          </p>
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
              {[
                "Women",
                "Men",
                "Kids",
                "Accessories",
                "Shoes",
                "Bags",
              ].map((category, index) => (
                <li
                  key={index}
                  className="text-gray-600 hover:text-pink-500 cursor-pointer"
                >
                  {category}
                </li>
              ))}
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
      {/* Two Images */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="ss5.png"
          alt="Blog Image 1"
          className="w-full rounded-lg"
        />
        <img
          src="ss6.png"
          alt="Blog Image 2"
          className="w-full rounded-lg"
        />
      </div>

      {/* Paragraph */}
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus
        est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam
        quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada
        lorem ipsum dolor sit amet.
      </p>

      {/* Four Product Divs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="text-center">
            <img
              src="ss3.png"
              alt={`Product ${index + 1}`}
              className="w-full rounded-lg"
            />
            <h3 className="mt-2 font-medium">Product Title</h3>
            <p className="text-pink-500 font-semibold">$20.00</p>
            <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
          </div>
        ))}
      </div>


      {/* Comment Form */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Leave a Comment</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-300"
            />
          </div>
          <textarea
            placeholder="Write your comment"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-300"
            rows={5}
          ></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo" className="text-gray-600">
              Save my name, email, and website for the next time I comment.
            </label>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Continue Shopping
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;