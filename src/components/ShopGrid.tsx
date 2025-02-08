"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts } from "@/sanity/lib/queries";
import { useCart } from "@/app/context/CartContext"; // Ensure the provider is wrapping your app
import { urlFor } from "@/sanity/lib/image"; // Import the image builder function

interface Product {
  _id: string;
  name: string;
  price: number;
  images: any[]; // Adjust type if needed (e.g. if using Sanity image objects)
  slug?: { current?: string };
}

const ShopGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useCart(); // This should return an object with a dispatch method

  console.log("Cart Context:", cart); // Verify that the cart context is available

  useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    getProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log("Add to Cart Button clicked!", product);
    if (!cart) {
      console.error("useCart() returned undefined. Please ensure your CartProvider is wrapping your app.");
      return;
    }
    cart.dispatch({
      type: "ADD_ITEM",
      payload: {
        _id: product._id,
        name: product.name,
        price: product.price,
        // Use urlFor to generate the image URL if available.
        image: product.images && product.images[0]
          ? urlFor(product.images[0]).url() // Ensure that urlFor returns a valid URL.
          : "/placeholder.jpg",
        slug: product.slug?.current ?? "",
      },
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Shop Grid</h1>
      <p className="text-gray-600 mb-6">Showing {products.length} products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer group relative"
          >
            <Link href={`/product/${product.slug?.current ?? ""}`}>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={
                    product.images && product.images[0]
                      ? urlFor(product.images[0]).url()
                      : "/placeholder.jpg"
                  }
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </Link>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGrid;
