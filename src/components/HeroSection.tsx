'use client';

import React, { useState } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  lampUrl: string;
  badgeText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'New Furniture Collection Trends in 2024',
    subtitle: 'Best Furniture For Your Castle...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    imageUrl: '/1.png',
    lampUrl: '/2.png',
    badgeText: '',
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative flex justify-center items-center h-[664px] max-w-[1320px] mx-auto bg-gray-50 overflow-hidden px-4 lg:px-0">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col lg:flex-row min-w-full justify-between items-center"
          >
            {/* Lamp Content */}
            <div className="flex-1 flex justify-start relative mb-[160px] lg:mb-0">
              <div className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[387px]">
                <img
                  src={slide.lampUrl}
                  alt="Lamp"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-4 max-w-[400px] px-6 text-center lg:text-left">
              <h4 className="text-pink-500 font-semibold text-lg">
                {slide.subtitle}
              </h4>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {slide.title}
              </h1>
              <p className="text-gray-600 text-base">{slide.description}</p>
              <button className="inline-block bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition">
                Shop Now
              </button>
            </div>

            {/* Image Content */}
            <div className="flex-1 flex justify-end relative mt-8 lg:mt-0">
              <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[606px] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[689px]">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-8 right-8 bg-blue-500 text-white py-2 px-4 rounded-full font-bold text-sm">
                {slide.badgeText}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 flex space-x-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-pink-500' : 'bg-gray-400'
            } cursor-pointer transition`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
