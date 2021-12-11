import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  // Price Add Total
  // const totalPrice = cart.reduce( (total, prd) => total + prd.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price;
  }
  // Shipping Cost
  let shipping = 0;
  if (totalPrice > 35) {
      shipping = 0;
  }
  else if (totalPrice > 15) {
    shipping = 4.99;
  } 
  else if (totalPrice > 0) {
    shipping = 12.99;
  }
  // TAX COST
  const tax = Math.round(totalPrice / 10);
  // Grand TOTAL
  const grandTotal = Math.round((totalPrice + shipping + tax))
  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Items ordered: {cart.length}</h5>
      <p>Items: </p>
      <p>Product Price: {totalPrice}</p>
      <p>Shipping & Handiling: {shipping}</p>
      <p>Total Price: {grandTotal}</p>
      <p>Total Before Tax: {tax}</p>
      <p>Estimated Tax: </p>
      <h3>Order Total: </h3>
    </div>
  );
};

export default Cart;
