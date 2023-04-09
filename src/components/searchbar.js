import styles from '../styles/searchbar.module.css';
import { useState, useEffect } from 'react';

const Searchbar = ({ tickers, setDisplayStocks }) => {

  const [value, setValue] = useState('');

  const [results, setResults] = useState();

  // Convert input to uppercase, ensure it is truthy, search against all tickers, set displayStocks state to matching tickers
  const getResults = () => {
    let input = value.trim().toUpperCase();
    let inputLength = input.length;

    if (inputLength === 0) {
      setDisplayStocks(tickers);
      return;
    }

    let matches = tickers.filter(ticker => ticker.toUpperCase().slice(0, inputLength) === input);
    setDisplayStocks(matches);
  }

  // Upon value change, call getResults if value is truthy
  useEffect(() => {
    if (!value) return;
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
