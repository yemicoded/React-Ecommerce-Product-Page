import React, {useState, useEffect, useContext} from 'react'
import './PageBody.css'
import prodImage1 from '../../images/image-product-1.jpg'
import prodThumbnail_1 from '../../images/image-product-1-thumbnail.jpg'
import prodThumbnail_2 from '../../images/image-product-2-thumbnail.jpg'
import prodThumbnail_3 from '../../images/image-product-3-thumbnail.jpg'
import prodThumbnail_4 from '../../images/image-product-4-thumbnail.jpg'
import plus from '../../images/icon-plus.svg'
import minus from '../../images/icon-minus.svg'
import cart from '../../images/icon-cart2.svg'
import { ProductThumbnail } from '../ProductThumbnail/ProductThumbnail'

// images to change to when the thumnail is clicked
import prodImage2 from '../../images/image-product-2.jpg'
import prodImage3 from '../../images/image-product-3.jpg'
import prodImage4 from '../../images/image-product-4.jpg'
import removeProduct from '../../images/icon-delete.svg'

// cartItemContext
import { cartItemProvider } from '../ProductPage/ProductPage'



export function PageBody({price, count, dispatch={dispatch}, setCartItem={setCartItem}}) {
      const [prodImage, setProdImage]=useState(prodImage1)
      const cartItem=useContext(cartItemProvider)

      const imgChanger=(newImage)=>{
            // e.currentTarget.children[1].classList.add('active')
            // console.log(e.target)
            setProdImage(newImage)
      }

      const getProductDetails=()=>{
            return(
                  <div className="item">
                        <img src={prodThumbnail_1} alt="" className="thumbnail-img" />
                        <div className="item-body">
                              <p className="product-title">Fall Limited Edition Sneakers</p>
                              <p className="purchase-details">$125.00 x 3 <strong>${price}</strong></p>
                        </div>
                        <div className="delete">
                              <img src={removeProduct} alt="" />
                        </div>
                  </div>
            )
      }
      
      const product={
            name:'Fall Limited Edition Sneskers',
            price: 125,
            thumbnail:prodThumbnail_1,
      }

      const populateCart=(count)=>{
            setCartItem([...cartItem, {
                  name: product.name,
                  Price: 125,
                  quantity:count,
                  thumbnail:product.thumbnail,
                  totalPrice:product.price * count
            }])
            // console.log(cartItem)
      }

      return (
      <section className="productPage">
            <div className="innerContainer">
              <div className="productContainer">
                  <div className="mainProductImg">
                      <img src={prodImage} alt=""/>
                  </div>
                  <div className="otherProductImg">
                        <ProductThumbnail image={prodThumbnail_1} onclick={imgChanger} newImage={prodImage1} active="active"/>
                        <ProductThumbnail image={prodThumbnail_2} onclick={imgChanger} newImage={prodImage2}/>
                        <ProductThumbnail image={prodThumbnail_3} onclick={imgChanger} newImage={prodImage3}/>
                        <ProductThumbnail image={prodThumbnail_4} onclick={imgChanger} newImage={prodImage4}/>
                  </div>
              </div>
              <div className="productContent">
                  <p className="companyName">SNEAKER COMPANY</p>
                  <h3 className="productTitle">Fall Limited Edition Sneskers</h3>
                  <article className="description">
                      These low-profile sneakers are your perfect casual wear companion. Featuring a 
                      durable rubber outer sole, they'll withstand everything the weather can offer.              
                  </article>
                  <div className="priceContainer">
                      <p className="price">$125</p>
                      <span className="discount">50%</span>
                  </div>
                  <p className="disabledPrice">$250</p>
                  <div className="cartBtnContainer">
                    <div className="productCount">
                        <img src={minus} alt="" onClick={()=>dispatch('minus')}/>
                        <span className="count">{count}</span>
                        <img src={plus} alt="" onClick={()=>dispatch('plus')}/>
                    </div>
                    <div className="cartBtn" onClick={()=>populateCart(count)}>
                      <img src={cart} alt="" />
                        Add to cart
                    </div>
                  </div>
              </div>
          </div>
      </section>
      )
}
