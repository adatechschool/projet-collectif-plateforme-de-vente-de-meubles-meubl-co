import React from 'react';

//import des fichiers Js et jsx pour toutes les pages 
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import Connexion from './pages/Connexion';

//import router de react pour pouvoir créer les liens entre les pages 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        {/* la façon de créer les rooters */}
         <Route path='/' element = {<Home/>}/> 
        <Route path='/produit' element = {<Produit/>}/> 
        <Route path='/panier' element = {<Panier/>}/> 
        <Route path='/connexion' element = {<Connexion/>}/> 
          
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;