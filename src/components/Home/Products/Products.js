import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../../utilities/fakedb';
import Product from '../Product/Product';
import './Products.css'
const Products = ({addToCart,setCart,addToWishlist,wishlist}) => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch('./FakeProducts.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
                 setIsLoading(false)
        })
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
        <>
            <div className='products-title'>
                <h2>Featured Products</h2>
                <p>Newest trends from top brands</p>
            </div>
            <div className='products container'>
                     {
                    isLoading &&   <h1 className='load'>Loading .....</h1>
                }
                {
                   products.map (product=><Product
                    key={product.key}
                    product={product}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist} wishlist={wishlist}
                   ></Product>)
                }
            </div>
        </>
    );
};

export default Products;