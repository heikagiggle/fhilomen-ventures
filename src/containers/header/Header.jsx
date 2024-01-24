import React from 'react'
import homeimage from '../../assets/Homeimagee.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  

  //for button

  return (
    <div className="fhilomen__header section__padding" id="home">
      <div className="fhilomen__header-content">
        <h1 className="gradient__text">Welcome to fhilomen Ventures</h1>
        <p>The aim of our company is to provide you with beautiful footwears from around the world.</p>
        <p>Sign up below to get the latest updates on our new arrivals</p>


        <div className="fhilomen__header-content__input">
          <input
            type="email"
            placeholder="Email address"
           
          />
            <Link to="/form" className="button-link"> 
            Enter
          </Link>
        </div>
      </div>

      <div className="fhilomen__header-image">
        <img src={homeimage} alt="homeimage" />
      </div>
    </div>
  )
}

export default Header
