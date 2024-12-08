// components/FeaturedProducts.tsx
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="p-6 md:p-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="Comfort Handy Craft" price="$450" image="/3.png" />
        <ProductCard title="Stylish Chair" price="$300" image="/4.png" />
        <ProductCard title="Stylish Chair" price="$42" image="/5.png" />
        <ProductCard title="Stylish Chair" price="$42" image="/6.png" />

        {/* Add more ProductCard components */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
