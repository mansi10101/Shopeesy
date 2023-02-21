import { Divider } from '@mui/material';
import React, { Fragment } from 'react'
import { useCartContext } from '../../context/cart_context';
import styles from '../../stylesheets/Cart.module.css';
import Alert from '../Shop/Alert';

const CartSummary = ({total_price, currCartItems,openModalConf,handleConf}) => {
  const {buyItems} = useCartContext();
  const handleBuyButton = () =>{
    buyItems(currCartItems)
    handleConf();
  }
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
          
        <div><button className= {styles.paybutt} onClick={handleBuyButton} >Pay Now</button></div>
        <Alert open={openModalConf} text="Order Confirmed" />
      </Fragment>
    )
}

export default CartSummary
