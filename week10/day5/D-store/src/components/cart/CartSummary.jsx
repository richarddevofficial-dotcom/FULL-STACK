export default function CartSummary({ total, onCheckout }) {
  return (
    <div className="card summary">
      <h3>Total: ${total}</h3>

      <button className="btn" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}
