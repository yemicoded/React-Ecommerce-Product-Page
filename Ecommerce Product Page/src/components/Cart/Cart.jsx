import React, {useState, useEffect} from 'react'
import './Cart.css'
import removeProduct from '../../images/icon-delete.svg'
import prodThumbnail_1 from '../../images/image-product-1-thumbnail.jpg'


export function Cart({cartCount, cartItem, setCartItem, visible}) {
      // const [cartItem, setCartItem]=useState(['a'])
      const [cartStatus, setCartStatus]=useState(false)

      // This function remove item from cart
      const deleteItem=(cartItemIndex)=>{
            const newCart= cartItem.filter((item,index)=> index!=cartItemIndex)
            setCartItem(newCart)
      }
      
      // function that check if the cartItem is empty
      const checkCart=()=>{
            if(cartItem.length === 0){
                  return (
                        <div className="no-item">Your cart is empty</div>
                  )
            }else{
                  return cartItem.map((item, index)=>{
                        return (
                        <div className="item" key={index}>
                              <img src= {item.thumbnail} alt="" className="thumbnail-img" />
                              <div className="item-body">
                                    <p className="product-title">{item.name}</p>
                                    <p className="purchase-details">$125 x {item.quantity} <strong>${item.totalPrice}</strong></p>
                              </div>
                              <div className="delete" onClick={()=>deleteItem(index)}>
                                    <img src={removeProduct} alt="" />
                              </div>
                        </div>)
                        }
                  )
            }
      }

      useEffect(()=>{
            cartItem.length === 0? setCartStatus(false):setCartStatus(true)
            cartCount(cartItem.length)
      }, [cartItem])

      return (
            <div className={`cart-container ${visible}`}>
                  <div className="cart-header">
                        <strong>Cart</strong>
                  </div>
                  <div className="cart-items">
                        {checkCart()}
                  </div>
                  {cartStatus && <div className="checkout-btn-container">
                        <button className='checkout-btn'>Checkout</button>
                  </div>}
            </div>
      )
}
