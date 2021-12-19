import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance} from '@fortawesome/free-brands-svg-icons'
import visa from '../../../Images/card/visa5@1X.png'
import paypal from '../../../Images/card/paypal11@1X.png'
import amazon from '../../../Images/card/amazon3@1X.png'
import masestro from '../../../Images/card/maestro1@1X.png'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const twiter = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instagram = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedIn = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    const behance = <FontAwesomeIcon icon={faBehance}></FontAwesomeIcon>
    const address = <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
    const MailBulk = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const PhoneAltulk = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    return (
        <div className=''> 
            <div className='footer-head footer-container'>
                <p>We’re confident we’ve provided all the best for you. Stay connect with us</p>
                <div className='footer-icons'>
                    <i>{facebook}</i>
                    <i>{twiter}</i>
                    <i>{linkedIn}</i>
                    <i>{instagram}</i>
                    <i>{behance}</i>
                </div>
            </div>
          <div className='hr'></div>
            <div className='footer-body footer-container'>
                <div className='footer-body-content'>
                    <h3>Information</h3>
                    <ul>
                        <li>Delivery Information</li>
                        <li>Discount</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>My Account </li>
                    </ul>
                </div>
                <div className='footer-body-content'>
                    <h3>My account</h3>
                    <ul>
                        <li>Sign In </li>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Check Out </li>
                        <li>Track My Order  </li>
                    </ul>
                </div>
                <div className='footer-body-content'>
                    <h3>Help  </h3>
                    <ul>
                        <li>FAQ </li>
                        <li>Shipping</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        
                    </ul>
                </div>
                <div className='footer-body-content'>
                    <h3>Contact info</h3>
                    <ul>
                        <li> {address}  1234 Your Address, Country. </li>
                        <li>{MailBulk}   mail@domain.com</li>
                        <li>{PhoneAltulk}  +123456789999</li>
                      
                    </ul>
                </div>
            </div>
            <div className='footer'>
                    <div className="footer-content footer-container">
                        <div className='footer-content-info'>
                            <p>Copyright 2017 RenoshopBee all right reserved  -  Design by BeeStudios</p>
                        </div>
                        <div className='footer-content-payment'>
                            <img src={visa} alt="" />
                            <img src={paypal} alt="" />
                            <img src={amazon} alt="" />
                            <img src={masestro} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Footer;