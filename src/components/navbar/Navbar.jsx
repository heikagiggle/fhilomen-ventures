import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#gallery">Gallery</a></p>
    <p><a href="#reviews">Reviews</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  return (
    <div className='fhilomen__navbar'>
      <div className='fhilomen__navbar-links'>
        <div className='fhilomen__navbar-logo'>
          <h1>FV</h1>
        </div>
        <div className='fhilomen__navbar-links_nav'>
         <Menu/>
        </div>
      </div>
      <div className="fhilomen__navbar-second">
        <p><a href="#contact">Contact us</a></p>
        <Link to="/order" className="button"> 
            Shop
          </Link>
      </div>

      <div className='fhilomen__navbar-mobile'>
        {
          toggleMenu
          ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu (false)}/>
          : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu (true)}/>
        }
        {toggleMenu && (
          <div className='fhilomen__navbar-mobile_menu scale up center'>
            <div className='fhilomen__navbar-mobile_menu-links'>
              <Menu/>
              <div className="fhilomen__navbar-mobile_menu-second">
                <p><a href="#reviews">Reviews</a></p>
                <button type="button">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
