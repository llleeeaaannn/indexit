import styles from '../styles/etf.module.css';
import chartjs from chartjs;

const Etf = () => {

  return (
    <div className={styles.etf}>

      <div className={styles.overview}>
        <h3>Ticker</h3>
        <h4>Name</h4>
        <span>$Original Price</span>
      </div>

      <div>Chart of ETF or maybe makeup of ETF</div>

      <div className={styles.prices}>
        <span>UpdatedPrice</span>
        <span>PercentChange</span>
      </div>

    </div>
  )
}

export default Etf;