import React from "react";

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">FAQ</h1>
        <p className="text-gray-500">
          Home &gt; Pages &gt; <span className="text-pink-500">FAQ</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - General Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">General Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristiquet sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Magna bibendum est fermentum eros.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristiquet sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Odio muskana hak eris consekin scelerisque?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristiquet sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Elit id blandit sabora bai velit gua mora?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristiquet sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Ask a Question Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Ask a Question</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-pink-300"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-pink-300"
            />
            <textarea
              placeholder="Type Your Message*"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-pink-300"
              rows={5}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
