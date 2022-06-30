import React, {useState, useReducer, useEffect} from 'react'

import { Header } from '../Header/Header';
import { PageBody } from '../ProductPageBody/PageBody';

export const cartItemProvider = React.createContext()
export const setCartItemProvider = React.createContext()


const countManipulator= (count, action)=>{
      switch(action){
            case 'plus':
                  return count+=1
            case 'minus':
                  if(count==1){
                        return count
                  } else{
                        return count-=1
                  }
            default: 
                  return count
      }
}

export function ProductPage(props) {
      const initialPrice = 125
      const [count, dispatch]=useReducer(countManipulator, 1)
      const [price, setPrice]=useState(initialPrice)

      const [cartItem, setCartItem]=useState([])

      const setCart=(arr)=>{
            setCartItem(arr)
      }

      useEffect(()=>{
            setPrice(initialPrice*count)
      }, [count])

      return (
            <>
            <cartItemProvider.Provider value={cartItem}>
                  <Header setCartItem={setCart}/>
                  <PageBody price={price} count={count} dispatch={dispatch} setCartItem={setCart}/> 
            </cartItemProvider.Provider>
            </>
      )
}
