import React from 'react';

//import des fichiers  Js e jsx  pour toutes les pages 
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import Produit from './pages/Produit';

//import router de react pour pouvoir créerles liens entre les pages 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import bootstarp
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        
        {/* la façon de créer les rooters */}
         <Route path='/' element = {<Home/>}/> 
        <Route path='/produit' element = {<Produit/>}/> 
          
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;