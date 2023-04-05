import styles from '../styles/searchbar.module.css';
import { useState, useEffect } from 'react';

const Searchbar = ({ tickers, setDisplayStocks }) => {

  const [value, setValue] = useState('');

  const [results, setResults] = useState();

  const getResults = () => {
    let input = value.trim().toUpperCase();
    let inputLength = input.length;

    if (inputLength === 0) return [];
    let matches = tickers.filter(ticker => ticker.toUpperCase().slice(0, inputLength) === input);
    setDisplayStocks(matches)
  }

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
