 // Importe le composant Product depuis le fichier Product.js
import Product from "./Product";
import { useState, useEffect } from "react";

//recuperation de l'API de synfony
const Fetch = () => {
  const [supplies, setSupplies] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/supply")
      .then((res) => { 
        return res.json();
  })
  .then((result) => {
  console.log(result);
  setSupplies(result);
  });
}, []);


// const meubles = [ 
//   { id: 1, name: 'Canapé 6 places', type: 'Main room', price: 150 , img :"https://www.mobilierdefrance.com/36115/canape-d-angle-panorama.jpg"},
//   { id: 2, name: 'Lit king size', type: 'Bed room', price: 450 , img :"https://cdn.conforama.fr/prod/product/image/42f6/G_CNF_I65582572_B.jpeg"},
//   { id: 2, name: 'Table', type: 'Kitchen', price: 80, img :"https://blog.home-design.schmidt/wp-content/uploads/2021/10/4_3-SCH_CUISINE_PanneauxRecycles_4472.jpg" },
//   { id: 2, name: 'Chair', type: 'Office', price: 300 , img :"https://kayumeuble.com/4210-large_default/fauteuil-tissu-jaune-casita-hasf1citmou.jpg"},
//   { id: 2, name: 'Table chevet', type: 'Bed room', price: 50, img :"https://www.massivmoebel24.fr/images/product_images/popup_images/09-680-772-0087-03.jpg" }

// ]

// const Produit = () => {
//   const products = []; 

  // Boucle for traditionnelle pour parcourir le tableau meubles
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

