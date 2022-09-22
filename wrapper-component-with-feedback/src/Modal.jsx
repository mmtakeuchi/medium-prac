import React, { useState, useEffect } from 'react';

const rangeTextValues = {
  1: 'Unsatisfied',
  2: 'Somewhat satisfied',
  3: 'Satisfied',
  4: 'Very satisfied',
  5: 'Extremely satisfied',
};

const Modal = () => {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    console.log(rating);
  };

  useEffect(() => {
    setRating(rangeTextValues[value]);
  }, [value]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>{rating}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
