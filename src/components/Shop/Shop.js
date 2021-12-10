import React from 'react';
import fakeData from '../../fakeData';
import { useState,useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products, setProducts] = useState(firstTen);
    // const [products, setProducts] = useState([]);
    // useEffect(() =>{
    //     fetch('./products.JSON')
    //     .then(res => res.json())
    //     .then( data => setProducts(data));
    // }, [])

    // console.log(fakeData);

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>{products.length}</h3> */}
                {
                    products.map(pdct => <Product product={pdct}></Product>)
                }
                
            </div>

            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
           
        </div>
    );
};

export default Shop;