import React, { useState } from 'react';
import CombinationLock from './components/CombinationLock';
import './App.css';

function App() {
  return <CombinationLock combination={[1, 2, 3, 4]} />;
}

export default App;
