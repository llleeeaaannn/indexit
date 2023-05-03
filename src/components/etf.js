import styles from '../styles/etf.module.css';

const Etf = () => {

  return (
    <div className={styles.etf}>

      <div>
        <h3>Ticker</h3>
        <h4>Name</h4>
        <span>$Original Price</span>
      </div>

      <div>
        <span>$UpdatedPrice</span>
        <span>PercentChange%</span>
      </div>

    </div>
  )
}

export default Etf;