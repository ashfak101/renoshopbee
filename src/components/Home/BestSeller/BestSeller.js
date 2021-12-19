import React, { useEffect, useState } from 'react';
import BestProducts from '../BestProducts/BestProducts';
import './BestSeller.css'
const BestSeller = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('./FakeProducts.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
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
                    (products.slice(0,4)).map(product=><BestProducts
                    key={product.key}
                    product={product}
                    
                    ></BestProducts>)
                }

            </div>
        </div>
    );
};

export default BestSeller;