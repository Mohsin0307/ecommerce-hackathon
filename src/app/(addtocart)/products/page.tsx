// Filepath: src/pages/product.tsx

import React from 'react';
import AddToCartButton from '@/components/AddToCartButton';

const ProductPage = () => {
  const product = { id: '1', name: 'Sample Product', price: 100, _id: '1', image: 'sample-image.jpg', slug: 'sample-product' };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductPage;