import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Stock from '../components/stock'

const Home = () => {

  const { random } = useContext(AppContext);

  return (
    <div>
      <Stock />
    </div>
  )
}

export default Home;
