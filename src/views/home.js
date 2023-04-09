import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Test from '../components/test';
import Searchbar from '../components/searchbar';
import stocksData from '../data/stocksdata';

const Home = () => {

  const [tickers, setTickers] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([])
  const [stockStates, setStockStates] = useState(null);
  const [loading, setLoading] = useState(true);

  // Call createStockStates upon page load and assign returned data to state
  useEffect(() => {
    const getHoldings = async function() {
      const response = await fetch('http://localhost:4000/holdings'); // For local
      // const response = await fetch('https://llleeeaaannn-automatic-couscous-vjrq6q676vr3j6-4000.preview.app.github.dev/holdings'); //For codespaces
      const json = await response.json();
      const {states, tickersArray} = createStockStates(json);
      setStockStates(states);
      setTickers(tickersArray);
      setLoading(false);
    }
    getHoldings();
  }, []);

  useEffect(() => {
    console.log(displayStocks);
  }, [displayStocks])

  // Create parent stock object and array of all tickers
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
      tickersArray.push(key);
    }
    return {states, tickersArray};
  }

  // Update parent stock state with new stock object data (called from within stock component)
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
      <Searchbar tickers={tickers} setDisplayStocks={setDisplayStocks}/>

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
