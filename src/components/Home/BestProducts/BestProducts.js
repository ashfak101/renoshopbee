import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart,faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const BestProducts = (props) => {
    const {img,name,price,star}=props.product
    const starIcon = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    const heartIcon = <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    return (
        <div className='card-content'>
            <img src={img} alt="" className='best-product-img'/>
            <h4>{name}</h4>
            <p>{price}</p>
            <Rating 
                initialRating={star}
               
                emptySymbol={starIcon}
                fullSymbol={starIcon}
                className='star'
               
                />
            <div className='card-icons'>
                <i onClick={()=>props.addToCart(props.product)}>{cartIcon}</i>
                <i onClick={()=>props.addToWishlist(props.product)}className='wis'>{heartIcon}</i>
            </div>
        </div>
    );
};

export default BestProducts;