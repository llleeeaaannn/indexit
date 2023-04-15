import styles from '../styles/stock.module.css';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ dataKey, stock, showSlider, updateStockState }) => {

  // Individual stock state
  const [stockState, setStockState] = useState(stock)

  // Update parent state when individual stock state changes
  useEffect(() => {
    console.log(stockState);
    updateStockState(dataKey, stockState);
  }, [stockState])

  // Arbitrary percent until API is implemented
  const stockPercent = 1.02;

  // Function to calculate percent change of price to 2 decimal places and remove decimals if they're unecessary
  const percentChange = () => {
    let percent = (stockState.price / stockState.originalprice * 100 - 100).toFixed(2);
    percent = parseFloat(percent) * 10 % 1 === 0 ? parseFloat(percent).toFixed(1) : percent;
    percent = parseFloat(percent) % 1 === 0 ? parseInt(percent) : percent;
    return parseFloat(percent);
  };

  // Function to parse price and remove unnecessary decimals
  const parsePrice = (price) => {
    let parsedPrice = parseFloat(price).toFixed(2);
    parsedPrice = parseFloat(parsedPrice) * 10 % 1 === 0 ? parseFloat(parsedPrice).toFixed(1) : parsedPrice;
    parsedPrice = parseFloat(parsedPrice) % 1 === 0 ? parseInt(parsedPrice) : parsedPrice;
    return parseFloat(parsedPrice);
  };

  // Function to add a + before the percent if it is positive
  const formatPercent = (percent) => {
    if (percent > 0) return `+${percent}`;
    return percent;
  }

  // Function to handle price change
  const handlePriceChange = (newPrice) => {
    setStockState((prevState) => ({
      ...prevState,
      price: parsePrice(Math.max(newPrice, 0)), // Ensure price is not less than 0
    }));
  };

  // Styling for sliders
  const sliderStyles = {
    track: {
      backgroundColor: '#E6E6E6'
    },
    active: {
      backgroundColor: '#CCCCCC'
    },
    thumb: {
      width: 15,
      height: 15
    },
    disabled: {
      opacity: 0.25
    }
  }

  return (
    <div className={styles.stock} id={dataKey}>

      <div className={styles.overview}>
        <h3>{ stockState.ticker }</h3>
        <h4>{ stockState.name }</h4>
        <div className={styles.price}>
          <span>${ stockState.originalprice }</span>
          <span>/</span>
          <span>{ stockPercent }%</span>
        </div>
      </div>

      { showSlider &&
        <div className={styles.slider}>
          <Slider
            axis="x"
            xstep={0.01}
            xmin={0}
            xmax={stockState.originalprice * 2}
            x={stockState.price}
            styles={sliderStyles}
            onChange={({ x }) => { handlePriceChange(Number(x)) }}
          />
        </div>
      }

      { !showSlider &&
        <div className={styles.priceInputs}>
          <input
            type="number"
            className={styles.price}
            value={stockState.price}
            onChange={(e) => { handlePriceChange(Number(e.target.value)) }}
          />

          <input
            type="number"
            min={-100.00}
            step={0.01}
            className={styles.percent}
            value={percentChange()}
            onChange={(e) => {
              const enteredValue = Number(e.target.value);
              const clampedValue = Math.max(enteredValue, -100);
              const percentage = clampedValue / 100;
              const newPrice = stockState.originalprice * (1 + percentage);
              handlePriceChange(newPrice);
            }}
          />

        </div>
      }

      <div className={`
        ${styles.updated}
        ${stockState.price > stockState.originalprice ? styles.positive : ''}
        ${stockState.price < stockState.originalprice ? styles.negative : ''}
      `}>
        <span>${ stockState.price }</span>
        <span>{ formatPercent(percentChange()) }%</span>
      </div>

    </div>
  )
}

export default Stock;
