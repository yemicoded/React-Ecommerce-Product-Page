import React from 'react'
import avatar from '../images/image-avatar.png';
import './header.css';
import Shop from './Shop';
import Cart from './Cart';


function Header() {
      return (
        <>
          <div className="header"> 
            <ul> 
              <li> <a href="index.js"> sneakers </a></li>
              <li>Collections</li> 
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
              <img className="avatar" src={avatar} alt="avatar" />
              <Cart/>
              <hr />
            </ul>
          </div>
          <Shop />
        </>
      );
}

export default Header;
