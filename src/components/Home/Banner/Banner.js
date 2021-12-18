import React from 'react';
import './Banner.css'
import img from '../../../Images/banner/banner.jpg'
const bannerImgBg={
    background:`url(${img})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    
    height: '100vh'
}
const Banner = () => {
    return (
        <div style={bannerImgBg} className='banner'>
           <div className='banner-content'>
           <h3>The Best <span>Woocommerce</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='btn'>Buy Now</button>
           </div>
        </div>
    );
};

export default Banner;