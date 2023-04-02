import styles from '../styles/stock.module.css';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ dataKey, stock, updateStockState }) => {

  const [stockState, setStockState] = useState(stock)

  useEffect(() => {
    updateStockState(dataKey, stockState);
  }, [stockState])

  const stockPercent = 1.02;

  const percentChange = () => {
    const percent = (stockState.price / stockState.currentprice * 100 - 100).toFixed(2);
    return percent > 0 ? `+${percent}` : percent;
  }

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
    <div className={styles.stock}>

      <div className={styles.overview}>
        <h3>{ stockState.ticker }</h3>
        <h4>{ stockState.name }</h4>
        <div className={styles.price}>
          <span>${ stockState.currentprice }</span>
          <span>/</span>
          <span>{ stockPercent }%</span>
        </div>
      </div>

      <div className={styles.slider}>
        <Slider
          axis="x"
          xstep={0.01}
          xmin={0}
          xmax={stockState.currentprice * 2}
          x={stockState.price}
          styles={sliderStyles}
          onChange={({ x }) => setStockState({
            price: Number(x.toFixed(2)),
            weight: stockState.weight,
            ticker: stockState.ticker,
            name: stockState.name,
            currentprice: stockState.currentprice
          })}
        />
      </div>

      <div className={`
        ${styles.updated}
        ${stockState.price > stockState.currentprice ? styles.positive : ''}
        ${stockState.price < stockState.currentprice ? styles.negative : ''}
      `}>
        <span>${ stockState.price }</span>
        <span>{ percentChange() }%</span>
      </div>

    </div>
  )
}

export default Stock;
