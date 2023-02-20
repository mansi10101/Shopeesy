import React, { Fragment } from 'react';
import TopBanner from '../TopBanner';
import bimage from '../../assets/img/banner/b6.jpg';
import CartWrapper from './CartWrapper';

const Cart = () => {
  
  return (
    <Fragment>
      <TopBanner
        image={bimage}
        title='cart'
        text='Lets make each other smile..'
      />
      <CartWrapper/>
    </Fragment>
  );
};

export default Cart;
