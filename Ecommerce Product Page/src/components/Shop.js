import product_1 from '../images/image-product-1.jpg'
import './header.css';
import React from 'react';
import Order from './Order';
import Bottom from './Bottom';

function Shop() {
    return (
    <div className="container">
        <div>
          <img src={product_1} className='image' alt="" />
          <div>
            <Bottom />
          </div>
        </div>
        <div className="info">
          <h4> SNEAKER COMPANY </h4>
          <h1>Fall Limited Edition Sneakers</h1> 
          <p className="sub-text">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they'll withstand everything the weather can offer
          </p>
          <Order />
        </div>
    </div>
  )
}

export default Shop;