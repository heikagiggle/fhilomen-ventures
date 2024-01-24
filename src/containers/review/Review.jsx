/* eslint-disable no-unused-vars */
import React from 'react'
import './Review.css'
import ShoeReview from '../../components/shoereviews/ShoeReview';
import image01 from '../../assets/image01.jpg';
import image02 from '../../assets/image02.jpg';
import image03 from '../../assets/image03.jpg';
import image04 from '../../assets/image04.jpg';

const Review = () => {
  const reviewData = [
    {
      customer: 'Princess',
      shoeModel: 'ComfortStride 2000',
      review: 'These shoes are incredibly comfortable and stylish. I love them!',
      rating: 5,
      imageUrl: 'image01.jpg',
    },
    {
      customer: 'Mrs Glory',
      shoeModel: 'GlamourGlide Sparkle',
      review: 'The GlamourGlide Sparkle shoes are perfect for parties. They shine like stars!',
      rating: 4.5,
      imageUrl: 'image02.jpg',
    },
    {
      customer: 'John Pascal',
      shoeModel: 'Zara Shoes',
      review: 'The Zara Shoes shoes are perfect for parties. They made my girlfriend feet pop!',
      rating: 4.5,
      imageUrl: 'image03.jpg',
    },
    {
      customer: 'Miss Freda',
      shoeModel: 'Fendi Slippers',
      review: 'The Fendi Slippers are perfect and comfortable. They make me feel purr!',
      rating: 4.5,
      imageUrl: 'image04.jpg',
    },
    
  ];
  return (
    <div className='fhilomen__review section__padding' id='reviews'>
      <div className='fhilomen__review-head'>
        <h1 className='gradient__text'>What our customers say</h1>
      </div>
     <div className='fhilomen__images'>
        <div className='fhilomen__review-list'>
          {reviewData.map((review, index)  =>(
            <ShoeReview customer={review.customer} shoeModel={review.shoeModel} review={review.review} rating={review.rating}  imageUrl={review.imageUrl} key={index}/>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Review
