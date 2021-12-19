import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,price,star}=props.product

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    const heartIcon = <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    return (
        <div className='product-card '>
            <img src={img} alt="" className=''/>
            <h4>{name}</h4>
            <p>{price}</p>
            <div className='product-icons'>
                <i>{cartIcon}</i>
                <i>{heartIcon}</i>
            </div>
        </div>
    );
};

export default Product;