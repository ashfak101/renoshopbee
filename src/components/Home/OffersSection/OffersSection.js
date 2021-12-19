import React from 'react';
import './OffersSection.css'
import brand1 from '../../../Images/Brand/brand-logo-1a@1X.png'
import brand2 from '../../../Images/Brand/brand-logo-2a@1X.png'
import brand3 from '../../../Images/Brand/brand-logo-4a@1X.png'
import brand4 from '../../../Images/Brand/brand-logo-3a@1X.png'
const OffersSection = () => {
    return (
        <div className='offer-content'>
            <div className='offer-content-discount'>
                    <h1>Get Out Special Discount</h1>
                    <p>Donec eu tristique felis. Duis augue mi,auctor ut purus  ut purus et, di Duis ut purus et, di Duis ut purus et, di Duiset auctor ut purus et, di Duis augue mi, auctor ut purus et, di</p>
                   
                   <input type="text" placeholder='E-mail address'/>
                    <button>GET COUPON NOW</button>
               
            </div>
            <div className='brand-img'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>
        </div>
    );
};

export default OffersSection;