import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.css';

import { Col, Container, Row } from 'react-bootstrap';
import Home from './components/Home';
import { useContext, useState } from 'react';
import About from './components/About'
import Shop from './components/Shop';
import NewReleases from './components/NewReleases';
import { CartProvider,CartContext } from './components/ContextComponent';


function App() {
  

  
  
  return (
   <div>
     
    
    
      <CartProvider>
        <MyNav /> 
        <Home />
        <About />
        <Shop />
      </CartProvider>
    
    
     
   </div>
  );
}

export default App;
