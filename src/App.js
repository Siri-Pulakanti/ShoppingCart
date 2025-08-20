import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import ProductProvider from "./context/ProductContext";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Shopping Cart Assignment</h1>
        <ProductList />
        <Cart />
      </div>
    </ProductProvider>
  );
}

export default App;
