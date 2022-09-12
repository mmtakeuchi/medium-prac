import React, { useState } from 'react';
import CombinationLock from './components/CombinationLock';

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: 'center' }}>You are logged in</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

export default App;
