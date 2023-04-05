import styles from '../styles/searchbar.module.css';
import { useState } from 'react';

const Searchbar = ({  }) => {

  const [value, setValue] = useState();

  return (
    <div className={styles.searchbar}>

      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
      </form>

    </div>
  )
}

export default Searchbar;
