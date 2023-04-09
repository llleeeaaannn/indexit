import styles from '../styles/searchbar.module.css';
import { useState, useEffect } from 'react';

const Searchbar = ({ tickers, setDisplayStocks, setDisplayLimit }) => {

  // Searchbar value
  const [value, setValue] = useState('');

  // Convert input to uppercase, ensure it is truthy, search against all tickers, set displayStocks state to matching tickers
  const getResults = () => {
    const input = value.trim().toUpperCase();
    const inputLength = input.length;

    if (inputLength === 0) {
      setDisplayStocks(tickers);
      return;
    }

    const matches = tickers.filter(ticker => ticker.toUpperCase().slice(0, inputLength) === input);
    setDisplayStocks(matches);
  }

  // Upon value change, call getResults if value is truthy
  useEffect(() => {
    setDisplayLimit(10);
    getResults();
  }, [value])

  return (
    <div className={styles.searchbar}>

      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

      </form>

    </div>
  )
}

export default Searchbar;
