import React, {useState} from 'react';
import './header.css'
import product_1 from '../images/image-product-1.jpg';
import product_2 from '../images/image-product-2.jpg';
import product_3 from '../images/image-product-3.jpg';
import product_4 from '../images/image-product-4.jpg';

let images = [product_1, product_2, product_3, product_4]


function Bottom() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageBottom = images.map((image) => (
    <img  className = 'mge' 
          src= {image} alt='images' 
          onClick={() => showImage(image)} />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };


  return (
    <div className=''>
      {imageBottom}
      {
        lightboxDisplay ? 
        <>
          <div id="lightbox" onClick={hideLightBox} >
            <button className='icon-left' onClick={showPrev}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg></button>
            <img id="lightbox-img" src={imageToShow} alt='images' />
            <button className='icon-right' onClick={showNext}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg></button>
            <button className='icon-exit' onClick={hideLightBox}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg></button>
          </div>
          <div className='lightboxx'> {imageBottom} </div>
        </>
       : ""
      }
    </div>
  )
}

export default Bottom;