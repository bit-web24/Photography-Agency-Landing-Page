import React from 'react';
import { products } from '../../../constants';
import MobileProduct from './MobileProduct';

const MobileProductPreview = () => {
  return (
    <section className="bg-[#1C1A1F] rounded-lg shadow-lg mx-4">
      <div className="space-y-4">
        {products.map((product, index) => (
          <MobileProduct key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MobileProductPreview;
