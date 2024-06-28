import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
        {/* affichage des props */}
      <p>Name: {product.name}</p>
      <p>Type: {product.type}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Product;


