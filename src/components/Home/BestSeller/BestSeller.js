import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../../utilities/fakedb';
import BestProducts from '../BestProducts/BestProducts';
import './BestSeller.css'
const BestSeller = ({addToCart,setCart,addToWishlist,wishlist}) => {
    const [products,setProducts]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('./FakeProducts.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
                 setIsLoading(false)
        }
        )
    },[])
    useEffect(()=>{
        if(products.length){
         const savedCart = getStoredCart();
         const storedCart =[]
         for(const key in savedCart){
             
             const addedProduct =products.find(product=>product.key===key);
             if(addedProduct){
                 const quantity = savedCart[key];
                 addedProduct.quantity=quantity;
                 storedCart.push(addedProduct);
             }
            
         }
         setCart(storedCart)
        }
     },[products])
    return (
       
        <div className='container best-seller'>
            <div className='best-seller-info'>
                <h3>BEST SELLERS</h3>
                <h5>The Best production from its</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
            <div className='best-product'>
                {
                    isLoading &&   <h1 className='load'>Loading .....</h1>
                }
                {
                    (products.slice(0,4)).map(product=><BestProducts
                    key={product.key}
                    product={product}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist} wishlist={wishlist}
                    ></BestProducts>)
                }

            </div>
        </div>
    );
};

export default BestSeller;