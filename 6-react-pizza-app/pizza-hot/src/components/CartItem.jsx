export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item border-bottom p-2">
      <p>
        {item.title} - {item.quantity * item.price} TL
      </p>
      <div className="actions">
        <button
          onClick={() => onDecrease(item)}
          className="btn btn-sm btn-outline-primary"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onIncrease(item)}
          className="btn btn-sm btn-outline-primary"
        >
          +
        </button>
      </div>
    </li>
  );
}
