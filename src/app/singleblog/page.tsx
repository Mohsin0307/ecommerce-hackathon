import React from "react";

const SingleBlog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Page Title */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Single Blog</h1>
        <p className="text-gray-500">Home &gt; Pages &gt; Single Blog</p>
      </div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Featured Image */}
          <img
            src="https://via.placeholder.com/800x400"
            alt="Featured"
            className="w-full rounded-lg"
          />
          {/* Heading and Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Mauris at orci non vulputate diam tincidunt nec.
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
          </div>
          {/* Two Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog Image 1"
              className="w-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog Image 2"
              className="w-full rounded-lg"
            />
          </div>
          {/* Paragraph */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada lorem ipsum dolor sit amet.
          </p>
          {/* Four Product Divs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt={`Product ${index + 1}`}
                  className="w-full rounded-lg"
                />
                <h3 className="mt-2 font-medium">Product Title</h3>
                <p className="text-pink-500 font-semibold">$20.00</p>
                <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-300"
            />
          </div>
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                F
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                T
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                I
              </div>
            </div>
          </div>
          {/* Recent Post Placeholder */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Post Title 1</li>
              <li>Post Title 2</li>
              <li>Post Title 3</li>
            </ul>
          </div>
        </div>
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
