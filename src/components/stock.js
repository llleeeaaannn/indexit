import styles from '../styles/stock.module.css';
import { useState } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ ticker }) => {

  const stockPrice = 50;
  const [stockNewPrice, setStockNewPrice] = useState(stockPrice);

  const percentChange = () => {
    const percent = (stockNewPrice / stockPrice * 100 - 100).toFixed(2);
    return percent > 0 ? `+${percent}` : percent;
  }

  const sliderStyles = {
    track: {
      backgroundColor: 'blue'
    },
    active: {
      backgroundColor: 'red'
    },
    thumb: {
      width: 20,
      height: 20
    },
    disabled: {
      opacity: 0.5
    }
  }

  return (
    <div className={styles.stock}>

      <div className={styles.overview}>
        <h3>AAPL</h3>
        <h4>Apple Inc</h4>
        <div className={styles.price}>
          <span>$153.80</span>
          <span>/</span>
          <span>+1.08%</span>
        </div>
      </div>

      <div className={styles.slider}>
        <Slider
          axis="x"
          xstep={0.01}
          xmin={0}
          xmax={100}
          x={stockNewPrice}
          onChange={({ x }) => setStockNewPrice(x.toFixed(2))}
          styles={sliderStyles}
        />
      </div>

      <div className={styles.updated}>
        <span>${ stockNewPrice }</span>
        <span>{ percentChange() }%</span>
      </div>

    </div>
  )
}

export default Stock;
