import React, { useState } from 'react';
import { ProductProps } from '../../../constants/types';

const Product: React.FC<ProductProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleProductClick = () => {
    if (product.subProducts) {
      setIsExpanded((prev) => !prev);
    } else {
      window.location.href = product.links;
    }
  };

  return (
    <div className="relative">
      <div
        onClick={handleProductClick}
        className="flex items-center justify-between mb-2 p-2 bg-[#1C1A1F] rounded-lg hover:bg-[#363733] transition-all cursor-pointer"
      >
        <div className="flex items-center">
          <div className="text-white text-xl mr-3">
            {product.icon}
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="text-md text-white font-semibold">{product.title}</h3>
              {product.subProducts && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-white h-4 w-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Scrollable SubProducts */}
      {isExpanded && product.subProducts && (
        <div className="ml-4 p-5 bg-[#1C1A1F] rounded-lg shadow-lg space-y-2 max-h-40 overflow-y-auto hide-scrollbar">
          {product.subProducts.map((subProduct, index) => (
            <a
              key={index}
              href={subProduct.links}
              className="block p-2 bg-[#363733] rounded-lg hover:bg-[#494A4D] transition-all no-underline"
            >
              <h4 className="text-sm text-white font-semibold">{subProduct.title}</h4>
              <p className="text-xs text-gray-400">{subProduct.description}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
