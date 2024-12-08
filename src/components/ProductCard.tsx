// components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <Image src={image} alt={title} width={200} height={200} className="rounded" />
      <h3 className="text-lg font-bold mt-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{price}</p>
    </div>
  );
};

export default ProductCard;
