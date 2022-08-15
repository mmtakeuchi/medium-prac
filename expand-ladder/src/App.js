import React from 'react'
import Ladder from './components/Ladder'
import './App.css';

 const LADDER_IMAGE =
  "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

function App() {
  const renderLadders = [1,2,3,4,5].map(el => <Ladder key={el} ladder={LADDER_IMAGE} num={el} />)
  
  return (
    <div className="App">
      {renderLadders}
    </div>
  );
}

export default App;
