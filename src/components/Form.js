import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  function handleSelectChange(e) {
    setQuantity(Number(e.target.value));
  }

  function handleInputChange(e) {
    setDescription(e.target.value);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleSelectChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
