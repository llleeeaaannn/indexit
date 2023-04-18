import styles from '../styles/home.module.css';
import { useState, useEffect } from 'react';
import Stock from '../components/stock';
import Searchbar from '../components/searchbar';
import SliderSwitch from '../components/sliderswitch';
import { tickertestdata, stocktestdata } from '../data/testdata';

const Home = () => {

  const [tickers, setTickers] = useState([]);
  const [displayStocks, setDisplayStocks] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(10);
  const [stockStates, setStockStates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSlider, setShowSlider] = useState(true);

  // Call createStockStates upon page load and assign returned data to state
  // useEffect(() => {
  //   const getHoldings = async function() {
  //     const response = await fetch('http://localhost:4000/holdings');
  //     const json = await response.json();
  //     const {states, tickersArray} = createStockStates(json);
  //     setStockStates(states);
  //     setTickers(tickersArray);
  //     setLoading(false);
  //   }
  //   getHoldings();
  // }, []);

  // Set state with test data instead of fetching
  useEffect(() => {
    setStockStates(stocktestdata);
    setTickers(tickertestdata);
    setLoading(false);
  }, []);

  // Create parent stock object and array of all tickers
  const createStockStates = (data) => {
    const states = {};
    const tickersArray = [];
    for (let key in data) {
      states[key] = {
        name: data[key].name,
        ticker: data[key].ticker,
        weight: data[key].weight,
        price: data[key].price,
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

      {
        !!displayStocks.length && <SliderSwitch showSlider={showSlider} setShowSlider={setShowSlider} />
      }

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

      {
        !displayStocks.length && <p>There are no matches</p>
      }

    </div>
  )
}

export default Home;
