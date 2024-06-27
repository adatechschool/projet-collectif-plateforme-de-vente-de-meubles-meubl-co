import React from 'react';
import Product from '../components/Product'

const meubles = [ // Définit un tableau d'objets représentant différents meubles
  { id: 1, name: 'Table', type: 'Dining', price: 150 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 }
]

const Produit = () => {
  return (
    <div>
      <Product product={meubles[0]} />
    </div>
  );
};

export default Produit;
