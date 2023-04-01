import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocksdata';

const Home = () => {

  const getHoldings = async function() {
    const response = await fetch('http://localhost:4000/holdings');
    const json = await response.json();
    console.log(json);
    return json;
  }

  const [tickers, setTickers] = useState(getHoldings);

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

  function calculateTotalValue(components) {
    let totalValue = 0;

    for (let key in components) {
      if (components.hasOwnProperty(key)) {
        let component = components[key];
        let contribution = component.weight * component.currentprice / 100;
        console.log(contribution);
        totalValue += contribution;
      }
    }
    console.log(totalValue);
    return totalValue;
  }

  calculateTotalValue(stocksData);

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
