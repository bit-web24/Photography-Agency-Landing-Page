import React from 'react';
import { products } from '../../constants';
import Product from './Product';

const ProductPreview = () => {
  return (
    <section className="bg-[#1C1A1F] py-4 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 cursor-pointer">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
