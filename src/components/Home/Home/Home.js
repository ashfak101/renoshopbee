import React, { useState } from 'react';
import { addToDb } from '../../../utilities/fakedb';



import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import OffersSection from '../OffersSection/OffersSection';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    const [cart,setCart]=useState([])
    const [wishlist,setWishlist]=useState(false)
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        // saving data to localStorage
        addToDb(product.key)
    }
  
    
    const addToWishlist=(product)=>{
        setWishlist(true)
       
    }
    return (
        <div>
            <Header cart={cart}/>
            <Banner/>
            <BestSeller addToCart={addToCart} setCart={setCart} addToWishlist={addToWishlist} wishlist={wishlist}/>
            <Services/>
            <Products addToCart={addToCart} setCart={setCart} addToWishlist={addToWishlist} wishlist={wishlist}/>
            <OffersSection/>
            <Footer/>
        </div>
    );
};

export default Home;