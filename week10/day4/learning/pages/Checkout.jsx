import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // simulate success
    navigate("/checkout/success");
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Checkout;
