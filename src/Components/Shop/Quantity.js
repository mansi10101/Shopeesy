import React from 'react'
import styles from '../../stylesheets/Shop.module.css';


const Quantity = ({quantity,setQuantity}) => {

    const handleQuantity = (param) => {
        if (param === 'increase' && quantity < 10) {
          setQuantity(quantity + 1);
        }
        if (param === 'decrease' && quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    return (
        <div className={styles.counter}>
              <p>Quantity: &nbsp;</p>
              <button
                className={styles.down}
                onClick={() => {
                  handleQuantity('decrease');
                }}
              >
                -
              </button>
              <input type='text' value={quantity} />
              <button
                className={styles.up}
                onClick={() => {
                  handleQuantity('increase');
                }}
              >
                +
              </button>
            </div>
    )
}

export default Quantity
