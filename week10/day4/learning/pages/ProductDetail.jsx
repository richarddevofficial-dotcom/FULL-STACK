import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
