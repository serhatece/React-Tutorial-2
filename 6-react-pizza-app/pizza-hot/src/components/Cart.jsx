import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import { UIContext } from "../context/UIContext";

export default function Cart() {
  const { items, deleteItem, addItem } = useContext(CartContext);

  const { uiProgress, hideCart, showCheckout } = useContext(UIContext);

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal open={uiProgress === "cart"}>
      <h2>Sepetiniz</h2>
      {items.length === 0 ? (
        <div className="alert alert-danger">Sepetiniz boş</div>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => addItem(item)}
              onDecrease={() => deleteItem(item.id)}
            />
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <div className="modal-actions text-end">
          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => hideCart()}
          >
            Kapat
          </button>
          {items.length > 0 && (
            <button
              className="btn btn-sm btn-outline-success"
              onClick={() => showCheckout()}
            >
              Sipariş Ver
            </button>
          )}
        </div>
        {items.length > 0 && (
          <p className="badge text-bg-success mb-0 fs-5">{cartTotal} TL</p>
        )}
      </div>
    </Modal>
  );
}
