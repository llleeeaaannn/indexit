import styles from '../styles/stock.module.css';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ dataKey, stock, showSlider, updateStockState }) => {

  // Individual stock state
  const [stockState, setStockState] = useState(stock)

  // Update parent state when individual stock state changes
  useEffect(() => {
    updateStockState(dataKey, stockState);
  }, [stockState])

  // Arbitrary percent until API is implemented
  const stockPercent = 1.02;

  // Function to calculate percent change of price and prepend symbol if negative
  const percentChange = () => {
    const percent = (stockState.price / stockState.originalprice * 100 - 100).toFixed(2);
    return percent > 0 ? `+${percent}` : percent;
  }

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
            onChange={({ x }) => setStockState({
              price: Number(x.toFixed(2)),
              weight: stockState.weight,
              ticker: stockState.ticker,
              name: stockState.name,
              originalprice: stockState.originalprice
            })}
          />
        </div>
      }

      { !showSlider &&
        <div className={styles.priceInputs}>
          <input type="number" className={styles.price}>
          <input type="number" className={styles.percent}>
        </div>
      }

      <div className={`
        ${styles.updated}
        ${stockState.price > stockState.originalprice ? styles.positive : ''}
        ${stockState.price < stockState.originalprice ? styles.negative : ''}
      `}>
        <span>{ stockState.price }</span>
        <span>{ percentChange() }%</span>
      </div>

    </div>
  )
}

export default Stock;
