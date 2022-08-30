import React, { useState, useEffect } from 'react';

const CustomProgram = () => {
  const [func, setFunc] = useState([]);
  const [input, setInput] = useState('');
  const [value, setValue] = useState({ prev: '', cur: '' });

  const half = (number) => number / 2;
  const double = (number) => number * 2;
  const increment = (number) => number + 1;
  const decrement = (number) => number - 1;

  const calculate = (btn) => {
    if (value.prev === '') return;

    let calculation = '';
    setFunc((prevState) => [...prevState, btn]);

    switch (btn) {
      case 'half':
        calculation = value.cur ? half(value.cur) : half(value.prev);
        break;
      case 'increment':
        calculation = value.cur ? increment(value.cur) : increment(value.prev);
        break;
      case 'decrement':
        calculation = value.cur ? decrement(value.cur) : decrement(value.prev);
        break;
      default:
        calculation = value.cur ? double(value.cur) : double(value.prev);
    }

    if (value.cur === '') {
      setValue((prevState) => ({ ...prevState, cur: calculation }));
    } else {
      setValue((prevState) => ({ prev: prevState.cur, cur: calculation }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue((prevState) => ({ ...prevState, prev: Number(input) }));
    setInput('');
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => calculate('half')}>half</button>
        <button onClick={() => calculate('double')}>double</button>
        <button onClick={() => calculate('increment')}>increment</button>
        <button onClick={() => calculate('decrement')}>decrement</button>
        <button className="clear">Clear</button>
      </div>

      <div>
        <h2>My Function</h2>
        <ul>
          {func?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="my-function">
        <div>Last Execution</div>
        <div>
          {value.prev ? value.prev : '? '} {'->'} My Function {'-> '}
          {value.cur ? value.cur : ' ?'}
        </div>
      </div>
    </div>
  );
};

export default CustomProgram;
