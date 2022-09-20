import React, { useState } from 'react';
import UnlockedScreen from './UnlockedScreen';

const Captcha = ({ combination }) => {
  const [enteredCode, setEnteredCode] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const combinationsMatch = (combo) => {
    for (let i = 0; i < combination.length; i++) {
      if (combination[i] !== combo[i]) return false;
    }

    return true;
  };

  const handleCodeInput = (e) => {
    const newCode = [...enteredCode, Number(e.target.value)];
    setEnteredCode(newCode);

    if (newCode.length === 4) {
      if (combinationsMatch(newCode)) {
        setLoggedIn(true);
        setEnteredCode([]);
      } else {
        setEnteredCode([]);
        alert('Incorrect Combination');
      }
    }
  };

  return (
    <div className="lock-container">
      {loggedIn ? (
        <UnlockedScreen setLoggedIn={setLoggedIn} />
      ) : (
        <>
          <div className="code-display">{enteredCode.join('')}</div>
          <div className="buttons-container">
            <button type="button" value="1" onClick={handleCodeInput}>
              1
            </button>
            <button type="button" value="2" onClick={handleCodeInput}>
              2
            </button>
            <button type="button" value="3" onClick={handleCodeInput}>
              3
            </button>

            <button type="button" value="4" onClick={handleCodeInput}>
              4
            </button>
            <button type="button" value="5" onClick={handleCodeInput}>
              5
            </button>
            <button type="button" value="6" onClick={handleCodeInput}>
              6
            </button>

            <button type="button" value="7" onClick={handleCodeInput}>
              7
            </button>
            <button type="button" value="8" onClick={handleCodeInput}>
              8
            </button>
            <button type="button" value="9" onClick={handleCodeInput}>
              9
            </button>

            <button type="button" value="0" onClick={handleCodeInput}>
              0
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Captcha;
