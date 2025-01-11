import { useState } from "react";
import { data } from "./data.js";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [items, setItems] = useState(data);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearList() {
    const onay = window.confirm("Listeyi temizlemek istiyor musunuz?");
    if (onay) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} onClearList={handleClearList} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Summary items={items} />
    </div>
  );
}

export default App;
