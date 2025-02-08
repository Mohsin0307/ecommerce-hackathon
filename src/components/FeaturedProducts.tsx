"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const fetchedProducts = await client.fetch(
          `*[_type == "product" && isFeaturedProduct == true] | order(_createdAt desc)[0...4]{
            _id,
            name,
            price,
            image
          }`
        );
        setFeaturedProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    }
    fetchFeaturedProducts();
  }, []);

  return (
    <section className="p-6 md:p-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Link
            key={product._id}
            href={`/shop/${product._id}`}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                fill
                className="object-contain rounded-md"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {product.name}
            </h3>
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
