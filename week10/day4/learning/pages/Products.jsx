import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Phone", price: 300 },
  { id: 2, name: "Laptop", price: 1200 },
];

function Products() {
  return (
    <div className="container">
      <h2>Products</h2>

      <div className="grid">
        {products.map((p) => (
          <Link to={`/products/${p.id}`} key={p.id}>
            <div className="card">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
