import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Stock from '../components/stock';
import Test from '../components/test';
import stocksData from '../data/stocks';


const Home = () => {

  const { random } = useContext(AppContext);

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
