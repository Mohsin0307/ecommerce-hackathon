// pages/index.tsx
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestProducts from '../components/LatestProducts';
import WhatShopexOffers from '../components/WhatShopexOffers';
import TrendingProducts from '../components/TrendingProducts';
import UniqueFeatures from '@/components/UniqueFeatures';
import DiscountItems from '@/components/DiscountItems';
import PromotionalBanner from '@/components/PromotionalBanner';
import Lblog from '@/components/Lblog';
import TopCat from '@/components/Topcat';
import Newsletter from '@/components/NewsLetter';
import { CartProvider } from './context/CartContext';


const Home: React.FC = () => {
  return (
    <div>      
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <WhatShopexOffers />
      <TrendingProducts />
      <PromotionalBanner />
      <UniqueFeatures />
      <DiscountItems />
      <TopCat />
      <Newsletter />
      <Lblog />
    </div>
  );
};

export default Home;
