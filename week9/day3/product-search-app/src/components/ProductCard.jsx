function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <p className="category">{product.category}</p>

      {product.inStock ? (
        <span className="badge green">In Stock</span>
      ) : (
        <span className="badge red">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductCard;
