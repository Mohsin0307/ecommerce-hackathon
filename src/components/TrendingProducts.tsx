"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  price: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const TrendingProducts: React.FC = () => {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchTrendingProducts() {
      try {
        const fetchedProducts = await client.fetch(
          `*[_type == "product" && isFeaturedProduct == true] | order(_createdAt desc)[0...3]{
            _id,
            name,
            price,
            image
          }`
        );
        setTrendingProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    }
    fetchTrendingProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Trending Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {trendingProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-60 bg-gray-100 flex justify-center items-center overflow-hidden">
                <img
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-pink-500 text-xl font-bold mb-4">{product.price}</p>
                <Link
                  href={`/shop/${product._id}`}
                  className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
