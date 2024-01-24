import React from 'react'
import './Gallery.css'
import { images } from "../../constants";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
<div className="fhilomen__gallery flex__center" id='gallery'>
      <div className="fhilomen__gallery-content">
        <h1>Photo Gallery</h1>
        <p>
        Check out our beautiful shoes from different brands and shop
        </p>
      </div>
      <div className="fhilomen__gallery-images">
        <div className="fhilomen__gallery-images_container" ref={scrollRef}>
          {[
            images.image01,
            images.image02,
            images.image03,
            images.image04,
            images.image05,
            images.image06,
            images.image07,
            images.image08,
            images.image09,

          ].map((image, index) => (
            <div
              className="fhilomen__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              
            </div>
          ))}
        </div>
        <div className="fhilomen__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div> 
    </div>
  )
}

export default Gallery
