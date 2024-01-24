import React from 'react';
import emailjs from 'emailjs-com';
import image from '../../assets/aboutimage.jpg';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import './ContactUs.css';

const ContactUs = (event) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t4wkcrg', 'template_3l38i9n', e.target)
      .then((result) => {
        alert('Message has been sent');
      })
      .catch((error) => {
        console.error('Failed to send the message:', error);
      });
      
  };

  return (
    <div className="fhilomen__contact section__padding" id="contact">
      <div className="fhilomen__contact-content">
        <h1 className="gradient__text">Contact Us</h1>
        <p>
          Are you ready to twirl through a world of elegance and embrace your every step with a touch of magic? Say hello via this box or our social media handles and sheer affordable delight awaits your feet!
        </p>

        <form onSubmit={sendEmail}>
          <div className="fhilomen__contact-input">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="8" placeholder="Type your message here" required></textarea>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="fhilomen__contact-icons">
          <FiTwitter style={{ margin: '1rem' }} />
          <FiInstagram style={{ margin: '1rem' }} />
        </div>
      </div>
      <div className="fhilomen__contact-image">
        <img src={image} alt="contactimage" />
      </div>
    </div>
  );
};

export default ContactUs;
