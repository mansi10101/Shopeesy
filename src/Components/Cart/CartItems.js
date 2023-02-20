import React from 'react';
import styles from '../../stylesheets/Cart.module.css';
import Quantity from '../Shop/Quantity';
import { useCartContext } from '../../context/cart_context';
import { Divider } from '@mui/material';

const CartItems = ({ id, name, img, price, quantity }) => {
  const { removeItem,setIncrease,setDecrease } = useCartContext();

  return (
    <div className={styles.product}>
      <div className={styles.p_img}>
        <img src={img} alt='' />
      </div>
      <div className={styles.p_details}>
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <h2>${price}</h2>
        </div>
        <div>
          <Quantity quantity={quantity} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)} />
        </div>
        <div>
          <h2 style={{fontWeight: "539"}}>Subtotal: ${price * quantity} </h2>
        </div>
        <button className={styles.remove_button} onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>
      <Divider style={{ border: '1px solid black' }} />
    </div>
  );
};

export default CartItems;
