import React from 'react'
import './ProductThumbnail.css'

export function ProductThumbnail({image, onclick, newImage, active}) {
      const check=(e)=>{
            const allThumnails=e.currentTarget.parentElement.children
            for(let thumbnail of allThumnails){
                  thumbnail.children[1].classList.remove('active')
            }
            e.currentTarget.children[1].classList.add('active')
      }
      return (
            <div className='imgContainer' 
            onClick={(e)=>{
                  onclick(newImage)
                  check(e)
                  }}>
                  <img src={image} alt=""/>
                  <div className={`lightBox ${active}`}></div>
            </div> 
      )
}
