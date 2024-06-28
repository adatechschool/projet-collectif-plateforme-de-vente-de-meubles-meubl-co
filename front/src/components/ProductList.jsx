 // Importe le composant Product depuis le fichier Product.js
import Product from "./Product";

const meubles = [ 
  { id: 1, name: 'Table', type: 'Dining', price: 150 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 }
]

const Produit = () => {
  const products = []; 

  // Boucle for traditionnelle pour parcourir le tableau meubles
  return (
    <div>
      
      

{/* Utilise la méthode map pour itérer sur chaque élément du tableau meubles. */}
{/* Pour chaque meuble, un composant Product est créé. */}

      {meubles.map((meuble) => (
        
    // Crée une instance du composant Product pour chaque objet meuble.
        <Product 
            
          // Fournit une clé unique pour chaque élément de la liste. La clé aide React à identifier quels éléments ont changé, ont été ajoutés ou supprimés. Utiliser meuble.id garantit que chaque Product a une clé unique.
          key={meuble.id}

          // product={meuble} : Passe l'objet meuble en tant que prop product au composant Product.
          product={meuble}
        />
      ))}

      
    </div>
  );
};

export default Produit; // Exporte le composant Produit par défaut
