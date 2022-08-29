import React from 'react';

const ItemValueList = ({ items, deleteItem }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <div>{item.name}</div>
          <div>${item.value}</div>
          <button onClick={() => deleteItem(item)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemValueList;
