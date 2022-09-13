import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useBitcoin = () => {
  const [bitcoin, setBitcoin] = useState('');

  const fetchBitcoin = async () => {
    try {
      const response = await axios.get(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
      );
      const data = await response.data.bpi.USD.rate;

      setBitcoin(data);
    } catch {
      console.log('Error fetching bitcoin price.');
    }
  };

  useEffect(() => {
    fetchBitcoin();
    const interval = setInterval(() => fetchBitcoin(), 60000);
    return () => clearInterval(interval);
  }, []);

  return bitcoin;
};

function App() {
  const bitcoin = useBitcoin();
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {bitcoin ? (
        <div>Price of bitcoin: ${bitcoin}</div>
      ) : (
        <div>Fetching price...</div>
      )}
    </div>
  );
}

export default App;
