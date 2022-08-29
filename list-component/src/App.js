import React, { useState } from 'react';
import Input from './components/Input';
import ItemValueList from './components/ItemValueList';
import './App.css';

const INITIAL_LIST = [
  { name: 'Tomatoes', value: 5.0 },
  { name: 'Basil', value: 2.5 },
  { name: 'Mozzarella', value: 9.99 },
];

function App() {
  const [items, setItems] = useState(INITIAL_LIST);

  const addNewItem = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  const deleteItem = (selectedItem) => {
    const remainingItems = items.filter(
      (item) => item.name !== selectedItem.name
    );
    setItems(remainingItems);
  };

  return (
    <div className="App">
      <Input addNewItem={addNewItem} />
      <ItemValueList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
