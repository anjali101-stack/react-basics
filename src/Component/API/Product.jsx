import React, { useEffect, useState } from "react";
import "./index.css";

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Product = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500); // debounce after 500ms

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [limit]);

  const HandleClick = () => {
    setLimit((prev) => prev + 5);
  };

  // Filter products by debounced search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="product-container">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {filteredProducts.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-info">
            <h2 className="product-title">{item.title}</h2>
            <p className="product-price">${item.price.toFixed(2)}</p>
            <p className="product-category">{item.category}</p>
            <p className="product-desc">
              {item.description.slice(0, 100)}...
            </p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      ))}

      <button className="buy-button" onClick={HandleClick}>
        Load More...
      </button>
    </div>
  );
};

export default Product;
