import React from 'react';
import { PenTool, Calendar } from "lucide-react";

const Lblog: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Latest Blog
      </h1>

      {/* Blog Posts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          {/* Image */}
          <img
            src="/f1.png"
            alt="Blog 1"
            className="w-full h-52 rounded-t-lg object-cover mb-4"
          />
          {/* Author & Date */}
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <PenTool className="mr-2 h-4 w-4 text-pink-500" />
            <span>SaberAli</span>
            <span className="ml-4">
              <Calendar className="inline-block mr-1 h-4 w-4 text-gray-400" />
              21 August, 2020
            </span>
          </div>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Top essential Trends in 2021
          </h2>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mightly
          </p>
          {/* Read More */}
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Read More
          </a>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          {/* Image */}
          <img
            src="/f2.png"
            alt="Blog 1"
            className="w-full h-52 rounded-t-lg object-cover mb-4"
          />
          {/* Author & Date */}
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <PenTool className="mr-2 h-4 w-4 text-pink-500" />
            <span>SaberAli</span>
            <span className="ml-4">
              <Calendar className="inline-block mr-1 h-4 w-4 text-gray-400" />
              21 August, 2020
            </span>
          </div>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Top essential Trends in 2021
          </h2>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mightly
          </p>
          {/* Read More */}
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Read More
          </a>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          {/* Image */}
          <img
            src="/f3.png"
            alt="Blog 1"
            className="w-full h-52 rounded-t-lg object-cover mb-4"
          />
          {/* Author & Date */}
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <PenTool className="mr-2 h-4 w-4 text-pink-500" />
            <span>SaberAli</span>
            <span className="ml-4">
              <Calendar className="inline-block mr-1 h-4 w-4 text-gray-400" />
              21 August, 2020
            </span>
          </div>
          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Top essential Trends in 2021
          </h2>
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">
            More off this less hello samlande lied much over tightly circa horse taped mightly
          </p>
          {/* Read More */}
          <a href="#" className="text-blue-500 font-medium hover:underline">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Lblog;