'use client'


// src/app/context/CartContext.tsx
import React, { createContext, useContext, useReducer } from "react";

// Define the shape of your cart state and actions.
interface CartState {
  items: any[];
}

interface CartAction {
  type: string;
  payload?: any;
}

// Example initial state and reducer:
const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    // Add more action cases as needed.
    default:
      return state;
  }
};

// Create a context with a default value (optional).
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Create a provider component.
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Export a custom hook to use the cart context.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
