import React from 'react'
import './BlogArticle.css'

const BlogArticle = ({title, text}) => {
  return (
    <div className='fhilomen__blogarticle'>
      <div className='fhilomen__blogarticle-title'>
        <div/>
        <h1>{title}</h1>
      </div>

      <div className='fhilomen__blogarticle-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BlogArticle
