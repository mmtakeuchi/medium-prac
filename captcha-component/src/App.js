import React, { useState } from 'react';
import './App.css';

const ONE =
  'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const TWO =
  'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const THREE =
  'https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const FOUR =
  'https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const FIVE =
  'https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const SIX =
  'https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

function App() {
  return <Captcha />;
}

const Captcha = () => {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState(0);

  const showCaptcha = () => {
    setShow(true);
    setAnswer(Math.floor(Math.random() * 5 + 1));
  };

  const checkAnswer = (choice) => {
    console.log(answer, choice);
    if (choice === answer) {
      setShow(false);
    } else {
      alert('Wrong answer!');
    }
  };

  return (
    <div className="App">
      {show ? (
        <>
          <p>Select {answer}</p>
          <div className="captcha-container">
            <button onClick={() => checkAnswer(1)}>
              <img src={ONE} alt="one" />
            </button>
            <button onClick={() => checkAnswer(2)}>
              <img src={TWO} alt="two" />
            </button>
            <button onClick={() => checkAnswer(3)}>
              <img src={THREE} alt="three" />
            </button>
            <button onClick={() => checkAnswer(4)}>
              <img src={FOUR} alt="four" />
            </button>
            <button onClick={() => checkAnswer(5)}>
              <img src={FIVE} alt="five" />
            </button>
            <button onClick={() => checkAnswer(6)}>
              <img src={SIX} alt="six" />
            </button>
          </div>
        </>
      ) : (
        <button onClick={showCaptcha}>I'm not a robot</button>
      )}
    </div>
  );
};

export default App;
