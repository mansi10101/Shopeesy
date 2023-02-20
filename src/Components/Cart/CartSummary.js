import React, { Fragment } from 'react'

import styles from '../../stylesheets/Cart.module.css';

const CartSummary = ({total_price}) => {
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
          <div className= {styles.totals}>
            <div><h2>Order Total: </h2></div>
            <div><p>{total_price}.00</p></div>
          </div>
      </Fragment>
    )
}

export default CartSummary
