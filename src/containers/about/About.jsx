import React from 'react'
import {GiBallerinaShoes} from 'react-icons/gi'
import about from '../../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <div className='fhilomen__about section__padding' id='about'>
      <div className='fhilomen__about-header'>
        <div className='fhilomen__about-content'>
          <h1><GiBallerinaShoes size={32} color="#002366"/> Step into a World of Whimsy and Wonder with Fhilomen Ventures! <GiBallerinaShoes size={32} color="#002366" /> </h1>
          <p>At our company, we believe that every stride should be a delightful dance, and every shoe should be a cherished treasure. Our enchanting collection of footwear is designed to sprinkle a dash of magic into your everyday life, making each step a joyful journey of comfort and style.</p>
        </div>
        <div className='fhilomen__about-image'>
          <img src={about} alt="about" />
        </div>
      </div>
      
    </div>
  )
}

export default About
