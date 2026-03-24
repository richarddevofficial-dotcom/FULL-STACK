import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card product-card">
      <img src={product.image} alt={product.title} />

      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price}</p>

      <div className="actions">
        <Link to={`/products/${product.id}`} className="btn">
          View
        </Link>

        <button className="btn" onClick={() => onAddToCart(product)}>
          Add
        </button>
      </div>
    </div>
  );
}
