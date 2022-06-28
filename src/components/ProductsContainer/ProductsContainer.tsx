import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  products: Array<{
    title: string;
    price: number;
    image: string;
    id: string;
  }>;
};

export const ProductsContainer: React.FC<Props> = ({ products }) => {
  return (
    <section className="w-11/12  p-15 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
      {products ? (
        products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))
      ) : (
        <p>Erro ao carregar produtos...</p>
      )}
    </section>
  );
};
