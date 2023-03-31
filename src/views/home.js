import styles from '../styles/home.module.css';
import { useState } from 'react';
import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocksdata';

const Home = () => {

  const createStockStates = (data) => {
    const states = {};
    for (let key in data) {
      states[key] = {
        ticker: data.key.ticker,
        name: data.key.name,
        weight: data.key.weight,
        currentprice: data.key.currentprice
      }
    }
  }

  const [stockStates, setStockStates] = useState(() => createStockStates(stocksData));

  return (
    <div className={styles.home}>
      {
        Object.keys(stocksData).map((share, i) => (
          <Stock share={stocksData[share]} key={i} />
        ))
      }
      <Test />
    </div>
  )
}

export default Home;
