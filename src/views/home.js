import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Test from '../components/test';
import Searchbar from '../components/searchbar';
import stocksData from '../data/stocksdata';

const Home = () => {

  const [tickers, setTickers] = useState([]);
  const [displayStocks, setDisplayStocks] = useState(['AMD', 'AAPL', 'MSFT'])
  const [stockStates, setStockStates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHoldings = async function() {
      const response = await fetch('http://localhost:4000/holdings');
      const json = await response.json();
      const {states, tickersArray} = createStockStates(json)
      setStockStates(states);
      setTickers(tickersArray);
      setLoading(false);
    }
    getHoldings();
  }, []);

  const createStockStates = (data) => {
    const states = {};
    const tickersArray = [];
    for (let key in data) {
      states[key] = {
        price: data[key].price,
        weight: data[key].weight,
        ticker: data[key].ticker,
        name: data[key].name,
        originalprice: data[key].originalprice
      }
      tickers.push(key);
    }
    return {states, tickersArray};
  }

  const updateStockState = (key, updatedState) => {
    setStockStates((oldState) => ({
      ...oldState,
      [key]: updatedState
    }))
  }

  if (loading) {
    return <div>LOADING</div>
  }

  return (
    <div className={styles.home}>
      <Searchbar />

      {
        displayStocks.map((stock, i) => (
          <Stock
            key={i}
            dataKey={stock}
            stock={stockStates[stock]}
            updateStockState={updateStockState}
          />
        ))
      }
    </div>
  )
}

export default Home;

// Old way of rendering stocks
// {
//   Object.keys(stockStates).map((stock, i) => (
//     <Stock
//       key={i}
//       dataKey={stock}
//       stock={stockStates[stock]}
//       updateStockState={updateStockState}
//     />
//   ))
// }
