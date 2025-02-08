"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  name: string;
  price: number | null;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const TopCategories: React.FC = () => {
  const [topCategoryProducts, setTopCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchTopCategoryProducts() {
      try {
        const fetchedProducts = await client.fetch(
          `*[_type == "product" && category in ["Chair", "Sofa"]] | order(_createdAt desc)[0...4]{
            _id,
            name,
            price,
            image
          }`
        );
        setTopCategoryProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching top category products:", error);
      }
    }
    fetchTopCategoryProducts();
  }, []);

  // Slick Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Top Categories</h2>

        {/* Slider for top category products */}
        <Slider {...settings}>
          {topCategoryProducts.map((product) => (
            <div key={product._id} className="p-4">
              <Link
                href={`/shop/${product._id}`}
                className="block bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-56 bg-gray-100">
                  <Image
                    src={
                      product.image
                        ? urlFor(product.image).url()
                        : "/placeholder-image.jpg"
                    }
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-pink-500 text-xl font-bold">
                    {product.price ? `$${product.price.toFixed(2)}` : "N/A"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopCategories;
