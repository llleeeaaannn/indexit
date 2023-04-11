import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Searchbar from '../components/searchbar';
import SliderSwitch from '../components/sliderswitch';
import { tickertestdata, stocktestdata } from '../data/testdata';

const Home = () => {

  const [tickers, setTickers] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([])
  const [displayLimit, setDisplayLimit] = useState(10);
  const [stockStates, setStockStates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSlider, setShowSlider] = useState(true);

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

  // Set state with test data instead of fetching
  // useEffect(() => {
  //   setStockStates(stocktestdata);
  //   setTickers(tickertestdata);
  //   setLoading(false);
  // }, []);

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

      <Searchbar
        tickers={tickers}
        setDisplayStocks={setDisplayStocks}
        setDisplayLimit={setDisplayLimit}
      />

      <SliderSwitch setShowSlider={setShowSlider} />

      {
        displayStocks.slice(0, displayLimit).map((stock, i) => (
          <Stock
            key={stock}
            dataKey={stock}
            showSlider={showSlider}
            stock={stockStates[stock]}
            updateStockState={updateStockState}
          />
        ))
      }

      {
        displayStocks.length > displayLimit &&
          <div className={styles.more}>
            <button
              onClick={() => setDisplayLimit((prevDisplayLimit) => prevDisplayLimit + 10)}
            >
              See more
            </button>
          </div>
      }

    </div>
  )
}

export default Home;
