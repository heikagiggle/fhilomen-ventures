import React from 'react'
import './Blog.css'
import { BlogArticle } from '../../components';

const blogData = [
  {
    title: '🌈 Step into Comfort Wonderland:',
    text: 'Picture slipping your feet into a pair of shoes is like receiving a warm hug from a cloud. Our footwear is engineered to cradle your feet in the coziest embrace, so you can conquer your day with a spring in your step and a smile on your face.',
  },
  {
    title: '🎉 Styles that Spark Joy:',
    text: 'Who says practicality can not be adorable? Our collection boasts an array of styles that are as cute as they are functional. From playful polka dots that add a dash of whimsy to sleek and chic designs that elevate any outfit, we have got a pair for every mood and occasion.',
  },
  {
    title: '🌟 Spread the Love, One Pair at a Time: ',
    text: 'Led ask possible mistress relation elegance eaWe believe in making a positive impact, not just on your wardrobe, but among people you love.',
  },
  {
    title: 'Really girl🎈 Join the Shoe-Party:',
    text: 'Follow us on social media, tag us in your shoe-adventures, and let us create a world where cuteness knows no bounds!',
  },
];

const Blog = () => {
  return (
    <div className='fhilomen__blog section__padding' id='blog'>
      <div className='fhilomen__blog-head'>
        <h1 className='gradient__text'>Mini-Blog</h1>
        <p>👠🌟 Discover Shoe-licious Delights: Unveiling the Magic of Fhilomen Ventures! 🌟👠</p>
      </div>

      <div className='fhilomen__blog-content'>
        {
          blogData.map((item,index) =>(
            <BlogArticle title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Blog
