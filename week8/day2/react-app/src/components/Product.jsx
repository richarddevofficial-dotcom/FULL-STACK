import React from "react";

function Product({ name, price, inStock }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Status:</strong> {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
