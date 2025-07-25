import React, { useEffect, useState } from "react";
import "./index.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [limit , setLimit] = useState(5)


  const HandleClick = () => {
    setLimit(limit+5)

    console.log("clicked")
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);



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

      <button className="buy-button" onClick={HandleClick}>Load More...</button>
    </div>
  );
};

export default Product;
