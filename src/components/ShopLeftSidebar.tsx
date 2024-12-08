import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const products = [
  {
    id: 1,
    image: "/sb1.png",
    title: "Dictum morbi",
    price: "$50.00",
    oldPrice: "$35.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: "/sb2.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "/sb3.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, {
    id: 4,
    image: "/sb4.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, {
    id: 5,
    image: "/sb5.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, {
    id: 6,
    image: "/sb6.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }, {
    id: 7,
    image: "/sb7.png",
    title: "Sodales sit",
    price: "$60.00",
    oldPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more products as needed
];

const ShopLeftSidebar: React.FC = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Sidebar */}
      <aside className="w-1/4 p-4 border-r border-gray-200">
        {/* Product Brand */}
        <div className="mb-6">
          <h3 className="font-medium text-lg text-gray-800 mb-2">Product Brand</h3>
          <div className="space-y-2">
            {["Coaster Furniture", "Fashion Dot High Fashion", "Unique Furniture Restor"].map(
              (brand, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${index}`} />
                  <label htmlFor={`brand-${index}`} className="text-gray-700">
                    {brand}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Discount Offer */}
        <div className="mb-6">
          <h3 className="font-medium text-lg text-gray-800 mb-2 border-b pb-2">Discount Offer</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="discount-20" />
              <label htmlFor="discount-20" className="text-gray-700">
                20% Cashback
              </label>
            </div>
          </div>
        </div>

        {/* Rating Items */}
        <div className="mb-6">
          <h3 className="font-medium text-lg text-gray-800 mb-2">Rating Items</h3>
          <div className="space-y-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${i}`} />
                  <label htmlFor={`rating-${i}`} className="text-gray-700">
                    {5 - i} stars
                  </label>
                </div>
              ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium text-lg text-gray-800 mb-2">Categories</h3>
          <div className="space-y-2">
            {["Accessories", "Jewelry", "Watches"].map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`category-${index}`} />
                <label htmlFor={`category-${index}`} className="text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-medium text-lg text-gray-800 mb-2">Price Filter</h3>
          <Slider defaultValue={[50]} max={500} step={10} className="mt-2" />
        </div>

        {/* Filter by Color */}
        <div>
          <h3 className="font-medium text-lg text-gray-800 mb-2">Filter by Color</h3>
          <div className="flex items-center space-x-2">
            {["Blue", "Red", "Green"].map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border border-gray-300 bg-${color.toLowerCase()}`}
              ></div>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="w-3/4 p-4">
        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-start border p-4 rounded-lg shadow hover:shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-800">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="text-gray-500 hover:text-red-600">♥</button>
                  <button className="text-gray-500 hover:text-blue-600">🔍</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopLeftSidebar;
