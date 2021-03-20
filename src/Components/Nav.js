import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className= "nav-Links">
        <Link to='/'>
        <li>Home</li>
        </Link >
        <Link to='/about'>
        <li>About</li>
        </Link>
        <Link to='/products'>
        <li>Products</li>
        </Link>
      </ul>
    </nav>
  
  );
}

 export default  Nav;