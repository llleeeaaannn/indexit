import styles from '../styles/calculate.module.css';
import { useState, useEffect } from 'react';

const Calculate = ({ stockStates }) => {

    const [etfPrice, setEtfPrice] = useState(0);

    const calculatePrice = () => {

    }

    useEffect(() => {
        console.log('Stock States Changed');
        console.log(stockStates);
    }, [stockStates])

  return (
    <div className={styles.calculate}>
      
    </div>
  )
}

export default Calculate;