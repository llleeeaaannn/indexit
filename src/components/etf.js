import styles from '../styles/etf.module.css';

const Etf = () => {

  return (
    <div>
        <div>
            <div className={styles.details}>

                <span>Ticker</span>
                <span>Name</span>

            </div>

            <div className={styles.price}>

                <div>
                    <span>Price</span>
                    <span>New Price</span>
                </div>
                <div>
                    <span>Percent Change</span>
                    <span>Dollar Change</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Etf;