import React from "react";

const ContactFormWithHero = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Hekto Demo</h1>
        <p className="text-gray-600">Cart / Information / Shipping / Payment</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 p-6 rounded-md" style={{ backgroundColor: "#F8F8FD" }}>
          {/* Navigation Steps */}
          <div className="mb-8">
            <ul className="flex items-center space-x-4 text-gray-600 text-sm">
              <li className="text-pink-500 font-semibold">Cart</li>
              <li>/</li>
              <li>Information</li>
              <li>/</li>
              <li>Shipping</li>
              <li>/</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="offers"
                  className="mr-2 focus:ring-pink-500"
                />
                <label htmlFor="offers" className="text-gray-600 text-sm">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Shipping Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600">
              Continue Shipping
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 shadow-md rounded-md space-y-6">
          {/* Product Summary */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={`/hd${item}.png`}
                  alt={`Product ${item}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">Product Name {item}</p>
                  <p className="text-gray-600 text-sm">Size: XL</p>
                </div>
              </div>
              <p className="text-gray-800 font-semibold">$120.00</p>
            </div>
          ))}

          {/* Subtotal and Total */}
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Subtotal:</p>
              <p className="text-gray-800 font-semibold">$600.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Total:</p>
              <p className="text-gray-800 font-semibold">$650.00</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWithHero;
