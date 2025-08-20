import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductItem({ product }) {
  const { cart, setCart } = useContext(ProductContext);

  const addToCart = () => {
    // Check if product already exists in cart
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      // If yes, increase qty
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // If no, add with qty = 1
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };

  return (
    <div
      style={{
        border: "3px solid #1cbda7",
        margin: "10px",
        padding: "10px",
        display: "inline flex",
        flexDirection: "column",
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
