import React, { useState } from 'react';
import FeedbackWrapper from './FeedbackWrapper';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FeedbackWrapper
        onSubmit={(obj) => {
          alert(`Rating from modal: ${obj.rating}`);
        }}
      >
        {/* UI composed of three no-op buttons */}
        <div style={{ display: 'flex', marginBottom: 10 }}>
          <button>A button</button>
          <button>Another button</button>
        </div>
        <button style={{ padding: 20 }}>A bigger button</button>
      </FeedbackWrapper>
    </div>
  );
}

export default App;
