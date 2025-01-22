import { useContext } from "react";
import Modal from "./UI/Modal";
import { UIContext } from "../context/UIContext";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

const config = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default function Checkout() {
  const { uiProgress, hidecheckout } = useContext(UIContext);
  const { items, clearAll } = useContext(CartContext);

  const { data, isLoading, error, SendRequest } = useFetch(
    "http://localhost:3000/orders",
    config
  );

  function handleClose() {
    hidecheckout();
    clearAll();
  }

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const customerData = Object.fromEntries(formData.entries());

    SendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      })
    );
  }

  if (data && !error) {
    return (
      <Modal open={uiProgress === "checkout"}>
        <h2>Siparişiniz alındı</h2>
        <button
          className="btn btn-sm btn-outline-danger me-2"
          onClick={() => handleClose()}
        >
          Kapat
        </button>
      </Modal>
    );
  }

  return (
    <Modal open={uiProgress === "checkout"}>
      <h2>Checkout</h2>
      <p className="text-danger">
        Sipariş tutarınız: {cartTotal.toFixed(2)} TL
      </p>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Ad Soyad
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefon Numarası
              </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                id="phone"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Adres
          </label>
          <textarea
            className="form-control"
            name="address"
            id="address"
          ></textarea>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Şehir
              </label>
              <input
                type="text"
                name="city"
                className="form-control"
                id="city"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="district" className="form-label">
                Mahalle
              </label>
              <input
                type="text"
                name="district"
                className="form-control"
                id="district"
              />
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="alert  alert-warning">Loading...</div>
        ) : (
          <>
            <button
              className="btn btn-sm btn-outline-danger me-2"
              onClick={() => hidecheckout()}
            >
              Kapat
            </button>

            <button type="submit" className="btn btn-sm btn-primary me-2">
              Kaydet
            </button>
          </>
        )}
      </form>
    </Modal>
  );
}
