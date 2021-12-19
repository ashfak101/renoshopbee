import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';



const Header = ({cart}) => {
    const phone = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const mail = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const shop = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    const search = <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    const bars = <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
    const facebook = <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
    const twiter = <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instagram = <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedIn = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    const behance = <FontAwesomeIcon icon={faBehance}></FontAwesomeIcon>

    const [navFixd,setNavFixed]=useState(false)
    let totalQuantity=0;
    for(const product of cart){
        if(!product.quantity)
        {
            product.quantity = 1
        }
        totalQuantity =totalQuantity + product.quantity;
    }
    const handleOnScroll =()=>{
        if(window.scrollY>=70){
            setNavFixed(true)
        }
        else{
            setNavFixed(false)
        }
        
    }
    window.addEventListener('scroll', handleOnScroll)
    return (
        <>
            
            <nav className='container bg nav'>
                <div className='nav-info'>
                    <p className='text'>{phone}    +1123456789 </p>
                    <p className='text'>{mail}    info@company.com</p>
                </div>
                <div className='nav-social'>
                    <i className='icon'>{facebook}</i>
                    <i className='icon'>{twiter}</i>
                    <i className='icon'>{instagram}</i>
                    <i className='icon'>{linkedIn}</i>
                    <i className='icon'>{behance}</i>
                </div>
            </nav>
            <menu >
                <div className={navFixd ? 'menu scroll' : 'menu container'}>
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
              
                <div className={navFixd ? 'menu-icons menu-icon-fix' : 'menu-icons'}>
                    <i>{shop} <span className='counter'>{totalQuantity}</span></i>
                   
                    <i>{search}</i>
                    <i>{bars}</i>
                </div>
                </div>
            </menu>
        </>
    );
};

export default Header;