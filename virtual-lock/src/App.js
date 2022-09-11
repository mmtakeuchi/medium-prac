import React, { useState } from 'react';

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: 'center' }}>You are logged in</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  // YOUR CODE HERE
};

export default App;
