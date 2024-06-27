import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Produit from './pages/Produit';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/> 
        <Route path='/produit' element = {<Produit/>}/> 
          
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;