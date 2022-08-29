import React, { useState } from 'react';

const Input = () => {
  const [task, setTask] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
      <input type="text" />
      <input type="number" />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Input;
