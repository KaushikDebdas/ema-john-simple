import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  // console.log(props.product.name);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>
        <p>
          <small>Only {stock} left in a stock - Order soon</small>
        </p>
        <button className="btn-cart" onClick= { () => props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={ faShoppingCart } /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
