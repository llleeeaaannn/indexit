import styles from '../styles/home.module.css';
import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocks';

const Home = () => {

  return (
    <div className={styles.home}>
      {
        Object.keys(stocksData).map((share, i) => (
          <Stock share={stocksData[share]} key={i} />
        ))
      }
      <Test />
    </div>
  )
}

export default Home;
