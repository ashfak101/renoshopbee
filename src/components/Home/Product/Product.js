import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart,faStar} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Product = (props) => {
    const {img,name,price,star}=props.product

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    const heartIcon = <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
    const starIcon = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
   
    return (
        <div className='product-card '>
            <img src={img} alt="" className=''/>
            <h4>{name}</h4>
            <p>{price}</p>
            
            <Rating 
                initialRating={star}
               
                emptySymbol={starIcon}
                fullSymbol={starIcon}
                className='star'
               
                />
               
            <div className='product-icons'>
                <i onClick={()=>props.addToCart(props.product)} className='icon'>{cartIcon}</i>
                <i onClick={()=>props.addToWishlist(props.product.key)} className={props.wishlist ? 'wishlist' : 'icon'}>{heartIcon}</i>
            </div>
               
        </div>
    );
};

export default Product;