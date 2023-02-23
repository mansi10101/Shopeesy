import React from 'react';
import { useCartContext } from '../../context/cart_context';
import CartItems from './CartItems';
import styles from '../../stylesheets/Cart.module.css';
import CartSummary from './CartSummary';
import SVGData from '../SVGData';
import TopBanner from '../TopBanner';
import bimage from '../../assets/img/banner/b16.jpg';
import { ReactComponent as SVG } from '../../assets/svg/empty-cart.svg';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart, total_price,ani_conatiner,ani_content } = useCartContext();
  const [confirm, setConfirm] = React.useState(false)
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const Confirmation = () => {
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  }
 
  if (cart.length === 0 && !confirm) {
    return <SVGData SVG={SVG} text='Cart is empty' />;
  }
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={ani_conatiner} animate='animate' initial='initial'>
        <TopBanner
          image={bimage}
          title='cart'
          text='Lets make each other smile..'
        />
        <motion.div variants={ani_content} className={styles.container}>
          <div className={styles.Cart_box}>
            {cart.map((curElem) => {
              return (
                <CartItems
                  key={curElem.id}
                  {...curElem}
                  cartLength={cart.length}
                />
              );
            })}
          </div>
          <div className={styles.cartsummary}>
            <CartSummary
              openModalConf={confirm}
              handleConf={Confirmation}
              currCartItems={cart}
              total_price={total_price}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Cart;
