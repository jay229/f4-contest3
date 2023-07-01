import React from 'react';
import Home from './components/Home';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path = "" element = {<Home/>}/>
        <Route path = "/cart" element = {<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App;