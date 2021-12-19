import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const BestProducts = (props) => {
    const {img,name,price,star}=props.product

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    const heartIcon = <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    return (
        <div className='cart-content'>
            <img src={img} alt="" className='best-product-img'/>
            <h4>{name}</h4>
            <p>{price}</p>
            <div className='cart-icons'>
                <i>{cartIcon}</i>
                <i>{heartIcon}</i>
            </div>
        </div>
    );
};

export default BestProducts;