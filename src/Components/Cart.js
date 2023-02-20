import React, { Fragment } from 'react';
import styles from '../stylesheets/Cart.module.css';
import image from '../assets/img/products/f1.jpg';
import Quantity from './Shop/Quantity';
import TopBanner from './TopBanner';
import bimage from '../assets/img/banner/b6.jpg';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Cart = ({ cartItems, setCartItems }) => {

    const [quantity, setQuantity] = React.useState(1)
  return (
    <Fragment>
      <TopBanner
        image={bimage}
        title='cart'
        text='Lets make each other smile..'
      />
      <div className={styles.Cart_box}>
        {/* <div className={styles.cart_items}> */}
        {/* <Scrollbars> */}
        {cartItems.map((cart) => {
          return (
            <div className={styles.product}>
              <div className={styles.p_img}>
                <img src={cart.img} alt='' />
              </div>
              <div className={styles.p_details}>
                <div>
                  <h2>{cart.name}</h2>
                </div>
                <div>
                  <h2>{cart.price}</h2>
                </div>
                <div>
                  <Quantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
                <div>
                  <button className={styles.remove_button}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}

        {/* </Scrollbars> */}
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default Cart;
