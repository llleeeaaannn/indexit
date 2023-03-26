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
        stocksData.map(share  => {
          <Stock share={share} />
        })
      }
      <Test />
    </div>
  )
}

export default Home;
