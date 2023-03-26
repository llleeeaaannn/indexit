import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocks';

const Home = () => {

  return (
    <div>
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
