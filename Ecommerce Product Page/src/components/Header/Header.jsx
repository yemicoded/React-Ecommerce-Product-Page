import React, {useState, useContext} from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'
import { Cart } from '../Cart/Cart'
import { cartItemProvider } from '../ProductPage/ProductPage'



export function Header({setCartItem}) {
      const [cartCount, setCartCount]=useState()
      const cartItem = useContext(cartItemProvider)
      const [cartVisibility, setVisibility]=useState('')

      const toggleCart=()=>{
            if(cartVisibility==''){
                  setVisibility('visible')
            }else if(cartVisibility=='visible'){
                  setVisibility('')
            }
      }

      const cartItemCount=(count)=>{
            setCartCount(count)
      }
      return (
            <header>
                  <div className="innerContainer">
                        <div className="logo">
                              <img src={logo} alt="" />
                        </div>
                        <nav>
                        <ul className="navMenu">
                              <li className="navLink"><a href="">Collections</a></li>
                              <li className="navLink"><a href="">Men</a></li>
                              <li className="navLink"><a href="">Women</a></li>
                              <li className="navLink"><a href="">About</a></li>
                              <li className="navLink"><a href="">Contact</a></li>
                        </ul>
                        <div className="navExtension">
                              <div className="cartContainer" 
                              onClick={()=>toggleCart()}>
                                    <img src={cart} alt="" />
                                    <span className="count">{cartCount}</span>
                              </div>
                              <div className="pictureContainer">
                                    <img src={avatar} alt="" className="picture"/>
                              </div>
                        </div>
                        </nav>
                        <Cart cartCount={cartItemCount} cartItem={cartItem} setCartItem={setCartItem} visible={cartVisibility}/>
                        
                  </div>
            </header>
      )
}
