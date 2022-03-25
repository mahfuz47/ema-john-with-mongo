import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // console.log(product.quantity);
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summery</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: ${parseFloat(tax.toFixed(2))}</p>
      <h5>Grand Total: ${parseInt(grandTotal)} </h5>
    </div>
  );
};

export default Cart;
