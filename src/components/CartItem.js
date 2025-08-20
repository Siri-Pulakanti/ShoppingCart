import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function CartItem({ item }) {
  const { setCart } = useContext(ProductContext);

  const increaseQty = () => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      )
    );
  };

  const decreaseQty = () => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id && cartItem.qty > 1
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      )
    );
  };

  const removeItem = () => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div
      style={{
        border: "3px solid #99dad0",
        margin: "10px",
        padding: "10px",
        display: "inline flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h4>{item.name}</h4>
        <p>Price: ₹{item.price}</p>
        <p>Subtotal: ₹{item.price * item.qty}</p>
      </div>

      <div>
        <button onClick={decreaseQty}>-</button>
        <span style={{ margin: "0 10px" }}>{item.qty}</span>
        <button onClick={increaseQty}>+</button>
      </div>

      <button onClick={removeItem} style={{ marginLeft: "20px" }}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
