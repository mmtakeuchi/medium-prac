import React, { useState } from 'react';

const Subtask = ({ item, setCompletedSubtasks }) => {
  const [completed, setCompleted] = useState(false);

  const completedStyle = {
    cursor: 'pointer',
    textDecoration: 'line-through',
  };

  const defaultStyle = {
    cursor: 'pointer',
  };

  const handleCompleted = (e) => {
    setCompleted(!completed);
    setCompletedSubtasks((prevState) => [...prevState, item]);
  };

  return (
    <li
      style={completed ? completedStyle : defaultStyle}
      onClick={handleCompleted}
    >
      {item}
    </li>
  );
};

export default Subtask;
