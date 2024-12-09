import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 text-center bg-white">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </section>

      {/* About Us Info Section */}
      <section className="py-16 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 px-6 lg:px-20">
        <div className="w-full lg:w-1/2">
          <img
            src="/a1.png"
            alt="About Us Image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
            malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor. Accumsan faucibus vitae
            lobortis quis bibendum quam.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
            Contact Us
          </button>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 bg-white text-center px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '🚚', title: 'Free Delivery', text: 'Lorem ipsum dolor sit amet.' },
            { icon: '💵', title: '100% Cash Back', text: 'Lorem ipsum dolor sit amet.' },
            { icon: '🏆', title: 'Quality Product', text: 'Lorem ipsum dolor sit amet.' },
            { icon: '🕒', title: '24/7 Support', text: 'Lorem ipsum dolor sit amet.' },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Client Say Section */}
      <section className="py-16 bg-gray-100 text-center px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Client Say!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: '/a2.png', name: 'Selina Gomez', text: 'CEO at Webecy' },
            { img: '/a3.png', name: 'John Doe', text: 'CTO at Company' },
            { img: '/a4.png', name: 'Jane Smith', text: 'Manager at Org' },
          ].map((client, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={client.img}
                alt={client.name}
                className="rounded-full w-24 h-24 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{client.text}</p>
              <div className="flex space-x-1">
                <span className="block w-4 h-1 bg-gray-800"></span>
                <span className="block w-4 h-1 bg-gray-800"></span>
                <span className="block w-4 h-1 bg-gray-800"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
