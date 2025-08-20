import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(ProductContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
