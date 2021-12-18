import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
    const phone = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const mail = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const twiter = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instagram = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedIn = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <>
            
            <nav className='container bg nav'>
                <div className='nav-info'>
                    <p className='text'><span>{phone} </span>   +1 123 456 789 </p>
                    <p className='text'><span>{mail} </span>   info@company.com</p>
                </div>
                <div className='nav-social'>
                    <i className='icon'>{facebook}</i>
                    <i className='icon'>{twiter}</i>
                    <i className='icon'>{instagram}</i>
                    <i className='icon'>{linkedIn}</i>
                </div>
            </nav>
            <menu className='container menu'>
                <div>
                    <h4 className='menu-title'><span>Renoshop</span>bee</h4>
                </div>
                
                    <ul>
                        <li>Home</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li> Kids</li>
                        <li>Jewellary</li>
                        <li>Accessories</li>
                        <li>Jewellary</li>
                    </ul>
              
                <div className='menu-icons'>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="menu-icon icon-cart" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg><span className='counter'>0</span></p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 menu-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg></p>
                </div>
            </menu>
        </>
    );
};

export default Header;