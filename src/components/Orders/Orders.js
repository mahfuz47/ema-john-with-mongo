import React from "react";
// import useProducts from "../../Hooks/useProducts";

import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import "./Orders.css";
import useCart from "../../Hooks/useCart";

const Orders = () => {
  // const [products] = useProducts();
  const [cart, setCart] = useCart();
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>Proceed Shipment</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
