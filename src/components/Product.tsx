import React from 'react';
import { ProductProps } from '../../constants/types';


const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex items-center mb-2 p-2 bg-[#1C1A1F] rounded-lg hover:bg-[#363733] transition-all">
      <div className="text-white text-xl mr-3">
        {product.icon}
      </div>
      <div>
        <h3 className="text-md text-white font-semibold">{product.title}</h3>
        <p className="text-xs text-gray-400">{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
