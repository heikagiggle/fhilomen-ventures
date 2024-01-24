import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="fhilomen__footer section__padding">

      <div className="fhilomen__footer-links">
        <div className="fhilomen__footer-links_logo">
          <h1>FV</h1>
          <p className='footer_p'>Behind UBA Building Lagos Island, <br /> All Rights Reserved</p>
        </div>
        <div className="fhilomen__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="fhilomen__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="fhilomen__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="fhilomen__footer-copyright">
        <p>@2023 Fhilomen Ventures. All rights reserved.</p>
      </div>
  </div>
  )
}

export default Footer
