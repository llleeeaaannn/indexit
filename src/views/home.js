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
        price: data.key.currentprice,
        weight: data.key.weight
      }
    }
  }

  const updateStockState = (key, updatedState) => {
    console.log(key);
    console.log(updatedState);
    setStockStates((oldState) => ({
      ...oldState,
      [key]: updatedState
    }))
  }

  const [stockStates, setStockStates] = useState(() => createStockStates(stocksData));

  return (
    <div className={styles.home}>
      {
        Object.keys(stocksData).map(([key, stock]) => (
          <Stock
            key={key}
            dataKey={key}
            stock={stock}
            updateStockState={updateStockState}
          />
        ))
      }
      <Test />
    </div>
  )
}

export default Home;
