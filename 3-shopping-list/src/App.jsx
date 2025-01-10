import { useState } from "react";

// const items = [
//   { id: 1, name: "Yumurta", quantity: 1, completed: true },
//   { id: 2, name: "Ekmek", quantity: 2, completed: true },
//   { id: 3, name: "Süt", quantity: 1, completed: false },
//   { id: 4, name: "Et", quantity: 2, completed: true },
//   { id: 5, name: "Zeytin", quantity: 1, completed: false },
// ];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <List />
      <Summary />
    </div>
  );
}

function Header() {
  return <h1>🛒 Shopping List</h1>;
}

function Form() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      title,
      quantity,
      completed: false,
    };

    handleAddItem(item);
    setTitle("");
    setQuantity(1);
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Ürün adi giriniz"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.completed ? { textDecoration: "line-through" } : null}>
        {item.quantity}
        {item.name}
      </span>
      <button>X</button>
    </li>
  );
}

function Summary() {
  return (
    <footer className="summary">
      Alişveriş sepetinizde 10 ürün bulunmaktadir.
    </footer>
  );
}

export default App;
