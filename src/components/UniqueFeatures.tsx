import React from 'react';

const UniqueFeatures: React.FC = () => {
  return (
    <section className="bg-purple-50 py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/17.png" alt="Italian Sofa" className="w-full md:w-1/2 rounded-md shadow-md" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Unique Features Of Latest & Trending Products</h2>
            <ul className="text-left text-gray-700 space-y-2">
              <li>✅ All frames constructed with hardwood solids and laminates</li>
              <li>✅ Reinforced with double wood dowels and screws</li>
              <li>✅ Arms, backs, and seats structurally reinforced</li>
            </ul>
            <button className="mt-6 px-8 py-3 bg-pink-500 text-white rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
