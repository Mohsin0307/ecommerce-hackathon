import React from "react";
import { useCart } from "@/app/context/CartContext";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

const AddToCartButton = ({ product }: { product: Product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
      },
    });
  };

  return (
    <button onClick={handleAddToCart} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;