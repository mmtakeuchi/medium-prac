import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { CURRENCY_NAME_TO_CODE } from './currency';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState({
    from: 'United States Dollar',
    to: 'United States Dollar',
  });
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = async () => {
    if (amount === 0 || selectedCurrency['from'] === selectedCurrency['to']) {
      setConvertedAmount(amount);
    } else {
      try {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?base=${selectedCurrency['from']}`
        );
        const rate =
          response.data.rates[CURRENCY_NAME_TO_CODE[selectedCurrency['to']]];

        const calculateAmount = amount * rate;
        setConvertedAmount(calculateAmount);
      } catch {
        console.error('Failed to convert between currencies');
      }
    }
  };

  const renderConversion = () => {
    const from = CURRENCY_NAME_TO_CODE[selectedCurrency['from']];
    const to = CURRENCY_NAME_TO_CODE[selectedCurrency['to']];

    return `${amount} ${from} = ${convertedAmount} ${to}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="currency-form">
        <p>Convert</p>
        <input
          type="text"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p>from</p>
        <select
          value={selectedCurrency['from']}
          required
          onChange={(e) =>
            setSelectedCurrency((prevState) => ({
              ...prevState,
              from: e.target.value,
            }))
          }
        >
          {Object.keys(CURRENCY_NAME_TO_CODE).map((currency, i) => (
            <option key={i} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p>to</p>
        <select
          value={selectedCurrency['to']}
          required
          onChange={(e) =>
            setSelectedCurrency((prevState) => ({
              ...prevState,
              to: e.target.value,
            }))
          }
        >
          {Object.keys(CURRENCY_NAME_TO_CODE).map((currency, i) => (
            <option key={i} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button type="submit">Convert</button>
      </form>
      <div>{convertedAmount && renderConversion()}</div>
    </div>
  );
};

export default CurrencyConverter;
