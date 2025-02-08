import { client } from './client';
import groq from 'groq';

export const allProductsQuery = groq`
  *[_type == "product"]{
    _id,
    name,
    "price": coalesce(price, null),
    "images": coalesce(images[].asset->_url, []),
    discountPercentage,
    category,
    slug { current }
  }
`;

export async function fetchProducts() {
  try {
    const products = await client.fetch(allProductsQuery);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}