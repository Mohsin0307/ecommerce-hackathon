import React from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  name: string;
  price: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  discountPercentage?: number;
  category: string;
  description: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-800 mb-4">
            Price: ${product.price}
          </p>
          {product.discountPercentage && (
            <p className="text-red-600 mb-4">
              {product.discountPercentage}% Off
            </p>
          )}
          <p className="text-gray-700 mb-4">
            Category: {product.category}
          </p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      name,
      price,
      image,
      discountPercentage,
      category,
      description
    }`,
    { id }
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
