'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-900">Hekto</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
        <li>
          <Link href="/">
            <span className="hover:text-pink-500 transition">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/shopbar">
            <span className="hover:text-pink-500 transition">Pages</span>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <span className="hover:text-pink-500 transition">Products</span>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <span className="hover:text-pink-500 transition">Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <span className="hover:text-pink-500 transition">Shop</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-pink-500 transition">Contact</span>
          </Link>
        </li>
      </ul>

      {/* Search Section */}
      <div className="hidden md:flex items-center space-x-2">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500 w-[300px]"
        />
        {/* Search Button */}
        <button className="bg-pink-500 p-3 rounded-r-md text-white hover:bg-pink-600 transition">
          <Search size={18} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-900"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-900 font-medium">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shopbar" onClick={() => setIsMobileMenuOpen(false)}>
                Pages
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
