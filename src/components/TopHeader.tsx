'use client';

import { Mail, Phone, Globe, User, Heart, ShoppingCart } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-purple-600 text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side: Email and Phone */}
      <div className="flex items-center space-x-4">
        {/* Email */}
        <div className="flex items-center space-x-1">
          <Mail size={16} />
          <a href="mailto:mhhasanul@gmail.com" className="hover:underline">
            mhhasanul@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-1">
          <Phone size={16} />
          <a href="tel:+1234567890" className="hover:underline">
            (12345)67890
          </a>
        </div>
      </div>

      {/* Right Side: Language, Currency, Login, Wishlist, and Cart */}
      <div className="flex items-center space-x-6 mt-2 md:mt-0">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <Globe size={16} />
          <span>English</span>
        </div>

        {/* Currency Dropdown */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>USD</span>
        </div>

        {/* Login */}
        <div className="flex items-center space-x-1">
          <User size={16} />
          <a href="/login" className="hover:underline">
            Login
          </a>
        </div>

        {/* Wishlist */}
        <div className="flex items-center space-x-1">
          <Heart size={16} />
          <a href="/wishlist" className="hover:underline">
            Wishlist
          </a>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1">
          <ShoppingCart size={16} />
          <a href="/cart" className="hover:underline">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
}
