import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-4 font-poppins">
      <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
