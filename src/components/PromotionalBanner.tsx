import React from 'react';

const PromotionalBanner: React.FC = () => (
  <section className="py-12 text-center">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Banner */}
      <div className="flex-1 p-6 bg-pink-100 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-3">23% off in all products</h2>
        <a href="#" className="text-pink-600 underline text-sm">Shop Now</a>
        <img src="/27.png" alt="Product 1" className="mt-4 mx-auto w-full h-32 object-contain" />
      </div>

      {/* Right Banner */}
      <div className="flex-1 p-6 bg-blue-100 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-3">23% off in all products</h2>
        <a href="#" className="text-pink-600 underline text-sm">View Collection</a>
        <img src="/26.png" alt="Product 2" className="mt-4 mx-auto w-full h-32 object-contain" />
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          {/* Product 1 */}
          <div className="p-3 bg-white border rounded-lg shadow-sm flex">
            <div>
              <img src="/25.png" alt="Executive Seat Chair 1" className="mx-auto w-16 h-16 object-contain mb-2" />
            </div>
            <div>
              <p className="text-gray-700 text-xs font-semibold">Executive Seat Chair</p>
              <p className="text-blue-900 text-sm font-bold">$32.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="p-3 bg-white border rounded-lg shadow-sm flex">
            <div>
              <img src="/24.png" alt="Executive Seat Chair 2" className="mx-auto w-16 h-16 object-contain mb-2" />
            </div>
            <div>
              <p className="text-gray-700 text-xs font-semibold">Executive Seat Chair</p>
              <p className="text-blue-900 text-sm font-bold">$32.00</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="p-3 bg-white border rounded-lg shadow-sm flex">
            <div>
              <img src="/23.png" alt="Executive Seat Chair 3" className="mx-auto w-16 h-16 object-contain mb-2" />
            </div>
            <div>
              <p className="text-gray-700 text-xs font-semibold">Executive Seat Chair</p>
              <p className="text-blue-900 text-sm font-bold">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromotionalBanner;
