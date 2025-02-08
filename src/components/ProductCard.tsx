import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <span className="text-xl font-bold text-gray-900">{price}</span>
    </div>
  );
};

export default ProductCard;
