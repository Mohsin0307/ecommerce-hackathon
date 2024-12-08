import React from 'react';

const products = [
  {
    id: 1,
    title: "Vel elit euismod",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s1.png",
  },
  {
    id: 2,
    title: "Ultricies condimentum imperdiet",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s8.png",
  },
  {
    id: 3,
    title: "Vitae suspendisse sed",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s3.png",
  },
  {
    id: 4,
    title: "Sed at fermentum",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s4.png",
  },
  {
    id: 5,
    title: "Vel elit euismod",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s5.png",
  },
  {
    id: 6,
    title: "Ultricies condimentum imperdiet",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s6.png",
  },
  {
    id: 7,
    title: "Vitae suspendisse sed",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s7.png",
  },
  {
    id: 8,
    title: "Sed at fermentum",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s8.png",
  },{
    id: 9,
    title: "Vel elit euismod",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s9.png",
  },
  {
    id: 10,
    title: "Ultricies condimentum imperdiet",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s10.png",
  },
  {
    id: 11,
    title: "Vitae suspendisse sed",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s11.png",
  },
  {
    id: 12,
    title: "Sed at fermentum",
    price: "$96.00",
    oldPrice: "$60.00",
    image: "/s12.png",
  },
  // Add more products as needed
];

const ShopGrid: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">
        Shop Grid Default
      </h1>
      <p className="text-gray-600 mb-6">
        About 8,000 results (0.25 seconds)
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {product.title}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm text-gray-400">●</span>
              <span className="text-sm text-gray-400">●</span>
              <span className="text-sm text-gray-400">●</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold text-gray-900">
                {product.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {product.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGrid;
