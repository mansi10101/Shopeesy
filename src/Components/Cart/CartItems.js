import React, { Fragment } from 'react';
import styles from '../../stylesheets/Cart.module.css';
import Quantity from '../Shop/Quantity';
import { useCartContext } from '../../context/cart_context';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const CartItems = ({ id, name, img, size, price, quantity, cartLength }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <Fragment>
      <div className={styles.product}>
        <Link to={`/product/${id} `}>
          <div>
            <img className={styles.p_img} src={img} alt='product img' />
          </div>
        </Link>
        <div className={styles.p_details}>
          <Link to={`/product/${id} `}>
            <div className={styles.item}>
              <h2>{name}</h2>
              <h2>Size: {size}</h2>
            </div>
          </Link>
          <div className={styles.item}>
            <h2>${price}</h2>
          </div>
          <div className={styles.item}>
            <Quantity
              quantity={quantity}
              setIncrease={() => setIncrease(id, size)}
              setDecrease={() => setDecrease(id, size)}
            />
          </div>
          <div className={styles.item}>
            <button
              className={styles.remove_button}
              onClick={() => removeItem(id, size)}
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
