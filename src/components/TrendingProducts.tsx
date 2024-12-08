import React from 'react';

const TrendingProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Cantilever Chair', price: '$50.00', image: '/18.png' },
    { id: 2, name: 'Cantilever Chair', price: '$50.00', image: '/19.png' },
    { id: 3, name: 'Cantilever Chair', price: '$50.00', image: '/20.png' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Trending Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
                <p className="text-pink-500 text-xl font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
