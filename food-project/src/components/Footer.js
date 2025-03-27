import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faXTwitter, faInstagram }from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer container">
        <div className="footer-section">
            <p className="title">FoodiesHub.com</p>
            <p>FoodiesHub is a place where you can 
                please your soul and tummy with delicious Food
                recepies of all cuisine. And our service is 
                absolutely free
            </p>
           
        </div>
        <div className="footer-section">
            <p className="title">ContactUs</p>
            <p>foddieshub@gmail.com</p>
            <p>+351-965898953</p>
            <p>1234 Portugal</p>
           
        </div>
        <div className="footer-section ">
            <p className="title-socials">Socials</p>
            <div className="socials">
            <FontAwesomeIcon className='facebook-icon' icon={faFacebook} />
          <FontAwesomeIcon className='x-twitter-icon' icon={faXTwitter} />
          <FontAwesomeIcon className='instagram-icon' icon={faInstagram} />
            </div>   

            <div >
           
            </div>
           
        </div>
       
        </div>
  )
}

export default Footer