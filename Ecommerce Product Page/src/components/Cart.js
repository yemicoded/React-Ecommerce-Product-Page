import React from 'react';
import './header.css';
import icon_cart from '../images/icon-cart.svg';

function Cart(){
    const cartIcon = <img className ="cart" src= {icon_cart} alt='images' />
    return(
        <>
            <div>
                {cartIcon}
            </div>
        </>
    )
}

export default Cart;