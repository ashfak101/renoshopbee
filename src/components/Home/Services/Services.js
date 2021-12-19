import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'
import img from '../../../Images/Service/service.png'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    const diamond = <FontAwesomeIcon icon={faGem} />
    const plane = <FontAwesomeIcon icon={faPaperPlane} />
    const share = <FontAwesomeIcon icon={faRetweet} />
    const rocket = <FontAwesomeIcon icon={faRocket} />
    return (
       <>
         <div className='services'>
            <div className='services-content'>
                <i>{diamond}</i>
                <h3>Special offers</h3>
                <p>Shop Big Save Big</p>
            </div>
            <div className='services-content'>
                <i>{plane}</i>
                <h3>FREE DELIVERY</h3>
                <p>On Orders Above $99</p>
            </div>
            <div className='services-content'>
                <i>{share}</i>
                <h3>30 Days Return</h3>
                <p>Policy We Offers</p>
            </div>
            <div className='services-content'>
                <i>{rocket}</i>
                <h3>Fastest Shipping</h3>
                <p>2 Days Express</p>
            </div>
            
            
              </div>
                <img src={img} alt="" className='service-img' />
              <div>

        </div>
       </>
    );
};

export default Services;