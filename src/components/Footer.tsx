import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-bold mb-4">Hekto</h2>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
              Sign Up
            </button>
          </div>
          <p className="text-gray-600 mt-4">Contact Info</p>
          <p className="text-gray-600">17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-600">
            <Link href="/myaccount">My Account</Link>
            <li>Discount</li>
            <li>Returns</li>
            <li><Link href="/mycart">Add to Cart</Link></li>
            
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-600">
            <Link href="/blogs">Blog</Link>
              <br />
            <li><Link href="/shopbar">Browse the Shop</Link></li>
            <li><Link href="/shop-list">Category</Link></li>
            <li>Pre-Built Pages</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-300 pt-6 flex justify-between items-center">
        <p className="text-gray-500">©Webecy - All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
