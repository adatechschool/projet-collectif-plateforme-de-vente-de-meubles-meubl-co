 // Importe le composant Product depuis le fichier Product.js

import Product from "./Product";
import { useState, useEffect } from "react";

//recuperation de l'API de symfony
const Fetch = () => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/supply")
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
      
{/* Utilise la méthode map pour itérer sur chaque élément du tableau meubles. */}
{/* Pour chaque meuble, un composant Product est créé. */}

      {supplies.map((supply) => (
        
    // Crée une instance du composant Product pour chaque objet meuble.
        <Product 
            
          // Fournit une clé unique pour chaque élément de la liste. La clé aide React à identifier quels éléments ont changé, ont été ajoutés ou supprimés. Utiliser meuble.id garantit que chaque Product a une clé unique.
          key={supply.id}

          // product={meuble} : Passe l'objet meuble en tant que prop product au composant Product.
          product={supply}
        />
      ))}
    </div>
  );
};

export default Fetch; // Exporte le composant Produit par défaut

