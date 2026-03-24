export default function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item card">
      <img src={item.image} alt={item.title} />

      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div className="quantity">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
      </div>

      <button className="btn remove" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}
