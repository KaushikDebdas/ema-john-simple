import React from "react";
import fakeData from "../../fakeData";
import { useState, useEffect } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // console.log("Product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  // const [products, setProducts] = useState([]);
  // useEffect(() =>{
  //     fetch('./products.JSON')
  //     .then(res => res.json())
  //     .then( data => setProducts(data));
  // }, [])

  // console.log(fakeData);

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h3>{products.length}</h3> */}
        {products.map((pdct) => (
          <Product handleAddProduct={handleAddProduct} product={pdct}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
