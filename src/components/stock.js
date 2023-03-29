import styles from '../styles/stock.module.css';
import { useState } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ share }) => {

  const stockPrice = 50.00;
  const stockPercent = 1.02;
  const [stockNewPrice, setStockNewPrice] = useState(stockPrice);

  const percentChange = () => {
    const percent = (stockNewPrice / stockPrice * 100 - 100).toFixed(2);
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
        <h3>{ share.ticker }</h3>
        <h4>{ share.name }</h4>
        <div className={styles.price}>
          <span>${ stockPrice }</span>
          <span>/</span>
          <span>{ stockPercent }%</span>
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

      <div className={`${styles.updated} ${stockNewPrice > stockPrice ? styles.positive : ''} ${stockNewPrice < stockPrice ? styles.negative : ''}`}>
        <span>${ stockNewPrice }</span>
        <span>{ percentChange() }%</span>
      </div>

    </div>
  )
}

export default Stock;
