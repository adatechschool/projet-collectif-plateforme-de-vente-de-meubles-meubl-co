import React from 'react';
import { useState, useEffect } from "react";
import Product from '../components/Product'

const Fetch = () => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/supply/2")
      .then((res) => { 
        return res.json();
  })
  .then((result) => {
  console.log(result);
  setSupplies(result);
  });
}, []);

  return (
    <div>
      {/* afficher un seul produit */}
      <Product product={supplies} />
    </div>
  );
};

export default Fetch;
