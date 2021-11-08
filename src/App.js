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
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import OffCanvasNav from './components/OffCanvasNav';



function App() {
  


  
  return (
   <div>



     
    <MyNav />
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path ='/home'element={<Home />} />
          <Route path ='/about'element={<About />} />
          <Route path ='/Shop'element={<Shop />} />
      </Routes>
    </BrowserRouter>
    


    
        
    
     
   </div>
  );
}

export default App;
