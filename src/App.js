import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setItems((items) =>
      // items.map((item) => {
      //   if (item.id === itemId) {
      //     return { ...item, packed: !item.packed };
      //   }
      //   return item;
      // })
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
