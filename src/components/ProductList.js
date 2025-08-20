import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
