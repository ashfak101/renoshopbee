import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('./FakeProducts.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
            <div className='products-title'>
                <h2>Featured Products</h2>
                <p>Newest trends from top brands</p>
            </div>
            <div className='products container'>
                {
                   products.map (product=><Product
                    key={product.key}
                    product={product}
                   ></Product>)
                }
            </div>
        </>
    );
};

export default Products;