import React, { useEffect, useState } from "react";
import "./index.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-info">
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">${item.price.toFixed(2)}</p>
            <p className="product-category">{item.category}</p>
            <p className="product-desc">{item.description.slice(0, 100)}...</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
