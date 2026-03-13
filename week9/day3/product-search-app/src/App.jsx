import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesStock = inStockOnly ? product.inStock : true;

    return matchesSearch && matchesStock;
  });

  return (
    <div className="container">
      <h1>Product List</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In Stock Only
        </label>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty">No products found</p>
      )}
    </div>
  );
}

export default App;
