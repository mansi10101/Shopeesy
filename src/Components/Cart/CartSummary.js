import { Divider } from '@mui/material';
import React, { Fragment } from 'react'
import { useCartContext } from '../../context/cart_context';
import styles from '../../stylesheets/Cart.module.css';

const CartSummary = ({total_price, currCartItems}) => {
  const {buyItems} = useCartContext();

    return (
        <Fragment>
        <div className= {styles.totals}>
            <div><h2>Subtotal:</h2></div>
            <div><p>{total_price}.00</p></div>
          </div>
          <div className= {styles.totals}>
            <div><h2>Shipping Fee: </h2></div>
            <div><span>- 0.00</span></div>
          </div>
          <Divider sx={{borderColor: "secondary.dark"}}/>
          <div className= {styles.totals}>
            <div><h2>Order Total: </h2></div>
            <div><p>{total_price}.00</p></div>
          </div>
          <div><button className= {styles.paybutt} onClick={() => buyItems(currCartItems)} >Pay Now</button></div>
      </Fragment>
    )
}

export default CartSummary
