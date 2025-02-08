'use client'

import React, { useState } from 'react';

const CartPage: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>Items in cart: {cartCount}</p>
    </div>
  );
};

export default CartPage;