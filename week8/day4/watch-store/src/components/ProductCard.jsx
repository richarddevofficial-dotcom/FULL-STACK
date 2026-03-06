function ProductCard({ image, name, price, inStock, isNew }) {
  return (
    <div className="card">
      {isNew && <span className="new-badge">New Arrival</span>}

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p className="price">${price}</p>

      <p className={inStock ? "stock" : "out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
