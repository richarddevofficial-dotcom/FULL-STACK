import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart }) {
  if (!products.length) {
    return <p className="text-center">No products found</p>;
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
