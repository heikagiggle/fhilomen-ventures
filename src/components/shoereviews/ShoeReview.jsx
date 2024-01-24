import React from 'react'
import './ShoeReview.css'

const ShoeReview = ({customer, shoeModel, review, rating, imageUrl }) => {
  return (
    <div className='fhilomen__shoe-review'>
        <div className='fhilomen__shoe-details'>
            <h2>Customer: {customer}</h2>
            <h3>Shoe:{shoeModel}</h3>
            <p>{review}</p>
            <div className='rating'>Rating:{rating}⭐⭐⭐⭐</div>
        </div>
        <div className='shoe__review-image'>
            <img src={imageUrl} alt="{shoeModel}" />
        </div>
    </div>
  )
}

export default ShoeReview

