import styles from '../styles/stock.module.css';
import { useState } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ ticker }) => {

  const stockPrice = 50;
  const [stockNewPrice, setStockNewPrice] = useState(stockPrice);

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
        <span>AAPL</span>
        <span>Apple Inc</span>
        <div>
          <span>$153.80</span>
          <span>+1.08%</span>
        </div>
      </div>

      <div className={styles.slider}>
        <span>${ stockNewPrice }</span>
        <Slider
          axis="x"
          xstep={0.01}
          xmin={0}
          xmax={100}
          x={stockNewPrice}
          onChange={({ x }) => setStockNewPrice(x.toFixed(2))}
          styles={sliderStyles}
        />
        <span>{ (stockNewPrice / stockPrice * 100 - 100).toFixed(2) }%</span>
      </div>

      <div className={styles.updated}>
        <div>
          <button>%</button>
          <button>$</button>
        </div>

        <span>{ stockNewPrice }</span>

        <div>
          <input type='text'></input>
        </div>
      </div>

    </div>
  )
}

export default Stock;
