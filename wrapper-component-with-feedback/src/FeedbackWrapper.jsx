import React, { useState } from 'react';
import Modal from './Modal';

const FeedbackWrapper = ({ onSubmit, children }) => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      {clicks >= 3 && (
        <Modal onSubmit={(rating) => onSubmit(rating)} setClicks={setClicks} />
      )}
      <div
        id="feedbackWrapper"
        onClick={(event) =>
          event.target.id !== 'feedbackWrapper' && setClicks(clicks + 1)
        }
      >
        {children}
      </div>
    </>
  );
};

export default FeedbackWrapper;
