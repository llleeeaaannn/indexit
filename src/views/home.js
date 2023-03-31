import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocksdata';

const Home = () => {

  const createStockStates = (data) => {
    const states = {};
    for (let key in data) {
      states[key] = {
        price: data[key].price,
        weight: data[key].weight,
        ticker: data[key].ticker,
        name: data[key].name,
        currentprice: data[key].currentprice
      }
    }
  }

  const updateStockState = (key, updatedState) => {
    setStockStates((oldState) => ({
      ...oldState,
      [key]: updatedState
    }))
  }

  const [stockStates, setStockStates] = useState(() => createStockStates(stocksData));

  return (
    <div className={styles.home}>
      {
        Object.keys(stocksData).map((stock, i) => (
          <Stock
            key={i}
            dataKey={stock}
            stock={stocksData[stock]}
            updateStockState={updateStockState}
          />
        ))
      }
      <Test />
    </div>
  )
}

export default Home;
