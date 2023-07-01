import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <section className="navFlex">
        <div>
          <h3>Shopping</h3>
        </div>
        <div className="navHome_Cart">
         <h3><NavLink id='navlink' to="/">Home Page</NavLink></h3>
       <h3><NavLink to="/cart">Cart Page</NavLink></h3>  
        </div>
      </section>
    </div>
  );
};

export default Navbar;
