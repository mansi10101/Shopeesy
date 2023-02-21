import React, { Fragment } from 'react';
import styles from '../../stylesheets/Cart.module.css';
import Quantity from '../Shop/Quantity';
import { useCartContext } from '../../context/cart_context';
import { Divider } from '@mui/material';

const CartItems = ({ id, name, img, price, quantity, cartLength }) => {
  const { removeItem, setIncrease, setDecrease  } = useCartContext();

  return (
    <Fragment>
      <div className={styles.product}>
        <div className={styles.p_img}>
          <img src={img} alt='' />
        </div>
        <div className={styles.p_details}>
          <div className={styles.item}>
            <h2>{name}</h2>
          </div>
          <div className={styles.item}>
            <h2>${price}</h2>
          </div>
          <div className={styles.item}>
            <Quantity
              quantity={quantity}
              setIncrease={() => setIncrease(id)}
              setDecrease={() => setDecrease(id)}
            />
          </div>
          <div className={styles.item}>
            <button
              className={styles.remove_button}
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      {cartLength > 1 && <Divider sx={{ borderColor: 'secondary.dark' }} />}
    </Fragment>
  );
};

export default CartItems;
