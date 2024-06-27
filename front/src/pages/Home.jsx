
import Product from './Produit';


const Home = () => {
    const meubles = [
        { id: 1, name: 'Table', type: 'Dining', price: 150 },
        // { id: 2, name: 'Chair', type: 'Office', price: 80 },
        // { id: 3, name: 'Sofa', type: 'Living Room', price: 300 },
        // { id: 4, name: 'Bed', type: 'Bedroom', price: 400 },    
    ]
    return (
        <div>
           
            <Product></Product>
            <p> <strong>nom :</strong>{meubles[0].name}</p>
        </div>

    );

};

export default Home;