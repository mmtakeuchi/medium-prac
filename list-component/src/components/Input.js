import React, { useState } from 'react';

const Input = ({ addNewItem }) => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const submitNewItem = (e) => {
    e.preventDefault();
    const newItem = { name: item, value: Number(price) };
    addNewItem(newItem);
    setItem('');
    setPrice('');
  };

  return (
    <form onSubmit={submitNewItem}>
      <input
        type="text"
        required
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="number"
        required
        min={0}
        step={0.01}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;
