import React, { useState } from 'react';
import { products } from '../../../constants';
import Product from './Product';

const ProductPreview = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 3);

  const handleViewToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="bg-[#1C1A1F] py-4 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 cursor-pointer">
          {displayedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={handleViewToggle}
        >
          <p className="text-white mr-2">{showAll ? 'View Less' : 'View All'}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`text-white h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
