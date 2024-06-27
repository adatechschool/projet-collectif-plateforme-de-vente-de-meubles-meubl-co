import React from 'react';

const Product = ({product}) => {
    
    
    return (
        <div>
            <p>{product.name}</p>
            <p>{product.type}</p>
        </div>
    );
};

export default Product;