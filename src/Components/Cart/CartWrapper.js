import React from 'react';
import { useCartContext } from '../../context/cart_context';
import CartItems from './CartItems';
import EmptyDiv from '../EmptyDiv';
import styles from '../../stylesheets/Cart.module.css';
import CartSummary from './CartSummary';

const CartWrapper = () => {
  const { cart,total_price } = useCartContext();

  if (cart.length === 0) {
    return <EmptyDiv text='Cart is Empty' />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.Cart_box}>
        {cart.map((curElem) => {
          return <CartItems key={curElem.id} {...curElem} cartLength={cart.length} />;
        })}
      </div>
      <div className={styles.cartsummary}>
        <CartSummary total_price={total_price}  />   
        </div>
          
    </div>
  );
};

export default CartWrapper;
