import React from 'react';

const TopCategories: React.FC = () => {
  const categories = [
    { id: 1, name: 'Mini LCW Chair', image: '/22.png' },
    { id: 2, name: 'Plastic Chair', image: '/23.png' },
    { id: 3, name: 'Sofa Compact', image: '/24.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
        <div className="flex justify-center gap-6">
          {categories.map((category) => (
            <div key={category.id} className="text-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
