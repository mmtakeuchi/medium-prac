import React, { useState, useEffect } from 'react';

const Timers = () => {
  const [time, setTime] = useState('');
  const [timers, setTimers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTimer = {
      start: new Date().getTime(),
      total: time * 1000,
      left: time * 1000,
    };

    setTimers((prevTimers) => [...prevTimers, newTimer]);
    setTime('');
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTimers((list) =>
          list
            .map((timer) => {
              return {
                ...timer,
                left: timer.total - (new Date().getTime() - timer.start),
              };
            })
            .filter((timer) => timer.left > 500)
        ),
      100
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="0"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Add Timer</button>
      </form>
      <ul className="timers">
        {timers.map((timer, i) => (
          <li key={i}>{(timer.left / 1000).toFixed(1)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Timers;
