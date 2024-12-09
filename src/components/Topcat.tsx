import React from "react";

const TopCategories = () => {
  const categories = [
    { image: "/3.png", title: "Mini LCW Chair", price: "$56.00" },
    { image: "/4.png", title: "Mini LCW Chair", price: "$56.00" },
    { image: "/10.png", title: "Mini LCW Chair", price: "$56.00" },
    { image: "/9.png", title: "Mini LCW Chair", price: "$56.00" },
  ];

  return (
    <section className="py-12 bg-white text-center w-full">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Top Categories</h1>

      {/* Slider */}
      <div className="relative flex justify-center items-center">
        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-full shadow-lg p-4 hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="w-32 h-32 rounded-full gap-8 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Details */}
              <h3 className="text-lg font-medium text-gray-800">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500">{category.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-pink-500" : "bg-gray-300"
              }`}
            />
          ))}
      </div>
    </section>
  );
};

export default TopCategories;
