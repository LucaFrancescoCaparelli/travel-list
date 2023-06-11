function Item({ item, onDeleteItem, onToggleItem }) {
  function handleButtonClick(itemId) {
    onDeleteItem(itemId);
  }

  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        value={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleButtonClick(item.id)}>❌</button>
    </li>
  );
}

export default Item;
