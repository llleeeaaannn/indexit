import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Stock from '../components/stock';
import Test from '../components/test';


const Home = () => {

  const { random } = useContext(AppContext);

  return (
    <div>
      <Stock />
      <Test />
    </div>
  )
}

export default Home;
