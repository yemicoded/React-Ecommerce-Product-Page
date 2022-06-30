import React, { useState, useEffect } from 'react';
import icon_cart from '../images/icon-cart.svg';


function Order() {
    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(125);
        
    useEffect(() => {
        setCalculation(() => count * 125);
      }, [count]);

    return (
      <div>
        <p className="price"> ${calculation}.00 <span> 50% </span> </p>
        <p className="slashed-price"> ${calculation * 2}.00  </p> 
        
        <div className="order">
            <div className="minus" onClick={() => setCount((c) => (c - 1) > 0 ? (c - 1) : 0  )}>
              <i class="fa-solid fa-minus"></i>
            </div>
            <div className="zero"> {count} </div>
            <div className="plus" onClick={() => setCount((c) => c + 1)}>
              <i className="fa-solid fa-plus sign"></i>
            </div>
            <div className='ca--rt'> 
              <div className='ca---rt'> 
               <img src= {icon_cart} alt='images' />
              </div>
              Add to cart
            </div>
        </div>       
      </div>
    )
}

export default Order;