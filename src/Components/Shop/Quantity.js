import React from 'react';
import styles from '../../stylesheets/Shop.module.css';

const Quantity = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <div className={styles.counter}>
      <p>Quantity: &nbsp;</p>
      <button className={styles.down} onClick={setDecrease}>
        -
      </button>
      <input type='text' value={quantity} />
      <button className={styles.up} onClick={setIncrease}>
        +
      </button>
    </div>
  );
};

export default Quantity;
