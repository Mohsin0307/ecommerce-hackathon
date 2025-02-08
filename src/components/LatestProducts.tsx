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

const LatestProducts: React.FC = () => {
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchLatestProducts() {
      try {
        const fetchedProducts = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)[0...6]{
            _id,
            name,
            price,
            image
          }`
        );
        setLatestProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching latest products:", error);
      }
    }
    fetchLatestProducts();
  }, []);

  return (
    <section className="p-6 md:p-10 bg-gray-50">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        Latest Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="w-full h-56 bg-gray-100 flex justify-center items-center">
              <img
                src={urlFor(product.image).url()}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mb-4 text-pink-500 text-xl font-bold">{product.price}</p>
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
    </section>
  );
};

export default LatestProducts;
