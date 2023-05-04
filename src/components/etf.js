import styles from '../styles/etf.module.css';

const Etf = () => {

  return (
    <div className={styles.etf}>

      <div className={styles.overview}>
        <h3>Ticker</h3>
        <h4>Name</h4>
        <span>$Original Price</span>
      </div>

      <div className={styles.prices}>
        <span>UpdatedPrice</span>
        <span>PercentChange</span>
      </div>

    </div>
  )
}

export default Etf;