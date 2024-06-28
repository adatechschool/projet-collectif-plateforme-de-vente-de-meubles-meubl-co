import React from 'react';

//import fichier product
import Product from '../components/Product'

const meubles = [ 
  { id: 1, name: 'Canapé 6 places', type: 'Main room', price: 150 , img :"https://www.mobilierdefrance.com/36115/canape-d-angle-panorama.jpg"},
  { id: 2, name: 'Lit king size', type: 'Bed room', price: 450 , img :"https://cdn.conforama.fr/prod/product/image/42f6/G_CNF_I65582572_B.jpeg"},
  { id: 2, name: 'Table', type: 'Kitchen', price: 80, img :"https://blog.home-design.schmidt/wp-content/uploads/2021/10/4_3-SCH_CUISINE_PanneauxRecycles_4472.jpg" },
  { id: 2, name: 'Chair', type: 'Office', price: 300 , img :"https://kayumeuble.com/4210-large_default/fauteuil-tissu-jaune-casita-hasf1citmou.jpg"},
  { id: 2, name: 'Table chevet', type: 'Bed room', price: 50, img :"https://www.massivmoebel24.fr/images/product_images/popup_images/09-680-772-0087-03.jpg" }

]

const Produit = () => {
  return (
    <div>
      {/* afficher un seul prduit */}
      <Product product={meubles[0]} />
    </div>
  );
};

export default Produit;
