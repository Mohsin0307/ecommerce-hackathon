"use client";
import { CartProvider } from "@/app/context/CartContext"; // ✅ Import CartProvider
import ShopGrid from "@/components/ShopGrid";

const ShopPage: React.FC = () => {
  return (
    <CartProvider> {/* ✅ Wrap entire shop page with CartProvider */}
      <ShopGrid />
    </CartProvider>
  );
};

export default ShopPage;
