// import styles from '../styles/navbar.module.css';
import ReactSlider from 'react-slider';

const Stock = ({ ticker }) => {

  return (
    <div className={styles.stock}>

      <div>
        <span>AAPL</span>
        <span>Apple</span>
        <div>
          <span>$153.80</span>
          <span>+1.08%</span>
        </div>
      </div>

      <div>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>

    </div>
  )
}

export default Stock;
