// import styles from '../styles/navbar.module.css';
import { useState } from 'react';
import Slider from 'react-input-slider';

const Stock = ({ ticker }) => {

  const [stockNewPrice, setStockNewPrice] = useState(50);

  return (
    <div>

      <div>
        <span>AAPL</span>
        <span>Apple</span>
        <div>
          <span>$153.80</span>
          <span>+1.08%</span>
        </div>
      </div>

      <div>
        <Slider
          axis="x"
          xstep={0.01}
          xmin={0}
          xmax={100}
          x={stockNewPrice}
          onChange={({ x }) => setStockNewPrice(x.toFixed(2))}
        />
      </div>

      <div>
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
