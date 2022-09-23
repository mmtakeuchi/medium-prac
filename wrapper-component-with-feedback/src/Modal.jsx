import React, { useState, useEffect } from 'react';

const rangeTextValues = {
  1: 'Unsatisfied',
  2: 'Somewhat satisfied',
  3: 'Satisfied',
  4: 'Very satisfied',
  5: 'Extremely satisfied',
};

const Modal = ({ onSubmit, setClicks }) => {
  const [value, setValue] = useState(1);
  const [valueText, setValueText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating: value });
    setClicks(0);
  };

  useEffect(() => {
    setValueText(rangeTextValues[value]);
  }, [value]);

  return (
    <div
      style={{
        zIndex: 100,
        backgroundColor: 'AntiqueWhite',
        width: 500,
        height: 200,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="range"
            min="1"
            max="5"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p style={{ width: 160, marginLeft: 10 }}>{valueText}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
