// pages/index.tsx
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestProducts from '../components/LatestProducts';
import WhatShopexOffers from '../components/WhatShopexOffers';
import TrendingProducts from '../components/TrendingProducts';
import UniqueFeatures from '@/components/UniqueFeatures';
import DiscountItems from '@/components/DiscountItems';
import Footer from '@/components/Footer';
import PromotionalBanner from '@/components/PromotionalBanner';
import LogosSection from '@/components/LogosSection';

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
    </div>
  );
};

export default Home;
