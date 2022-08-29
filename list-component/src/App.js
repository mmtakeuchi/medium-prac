import React, { useState } from 'react';
import ItemValueList from './components/ItemValueList';
import './App.css';

const INITIAL_LIST = [
  { name: 'Tomatoes', value: 5.0 },
  { name: 'Basil', value: 2.5 },
  { name: 'Mozzarella', value: 9.99 },
];

function App() {
  return <ItemValueList />;
}

export default App;
