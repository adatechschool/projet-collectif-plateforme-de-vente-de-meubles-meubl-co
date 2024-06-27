import Product from "./Product"; // Importe le composant Product depuis le fichier "../components/Product"

const meubles = [ // Définit un tableau d'objets représentant différents meubles
  { id: 1, name: 'Table', type: 'Dining', price: 150 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 },
  { id: 2, name: 'Chair', type: 'Office', price: 80 }
]

const Produit = () => {
  const products = []; // Initialise un tableau vide pour stocker les composants Product

  // Boucle for traditionnelle pour parcourir le tableau meubles
  for (let i = 0; i < meubles.length; i++) {
    const meuble = meubles[i]; // Récupère l'objet meuble à l'indice i dans le tableau meubles

    // Ajoute un composant Product à products avec les propriétés key et product
    products.push(
      <Product
        product={meuble} // Prop product contenant les données du meuble actuel
      />
    );
  }

  // Retourne une div contenant tous les composants Product générés dans la boucle for
  return (
    <div>
      {products}
    </div>
  );
};

export default Produit; // Exporte le composant Produit par défaut
