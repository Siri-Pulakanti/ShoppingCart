import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  // ✅ Load from localStorage only once
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      return [];
    }
  });

  // ✅ Save whenever cart updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductContext.Provider value={{ products, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
