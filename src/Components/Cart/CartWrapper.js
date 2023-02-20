import React from 'react';
import { useCartContext } from '../../context/cart_context';
import CartItems from './CartItems';
import EmptyDiv from '../EmptyDiv';
import styles from '../../stylesheets/Cart.module.css';

const CartWrapper = () => {
  const { cart } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return <EmptyDiv text='Cart is Empty' />;
  }
  return (
    <div className={styles.Cart_box}>
      {cart.map((curElem) => {
        return <CartItems key={curElem.id} {...curElem} />;
      })}
    </div>
  );
};

export default CartWrapper;
