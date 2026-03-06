import ProductImage from "./ProductImage";

function ProductCard({ title, price, image, description }) {
  return (
    <div className="card">
      <ProductImage image={image} title={title} />
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
