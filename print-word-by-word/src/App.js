import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [input, setInput] = useState('');
  const [text, setText] = useState([]);
  const [word, setWord] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    const words = input.split(' ');
    setText(words);
    setWord(1);
    setInput('');
  };

  useEffect(() => {
    if (text && word < text.length) {
      const time = setTimeout(() => setWord(word + 1), 500);
      return () => clearTimeout(time);
    }
  }, [text, word]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div style={{ display: 'flex' }}>
        {text.slice(0, word).map((item, i) => (
          <p key={i} style={{ paddingRight: 4 }}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
