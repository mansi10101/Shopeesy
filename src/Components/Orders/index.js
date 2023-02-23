import React from 'react';
import bimage from '../../assets/img/banner/b6.jpg';
import TopBanner from '../TopBanner';
import { useCartContext } from '../../context/cart_context';
import OrderCard from './OrderCard';
import styles from '../../stylesheets/Orders.module.css';
import SVGData from '../SVGData';
import { ReactComponent as SVG } from '../../assets/svg/no-orders.svg';
import { motion } from 'framer-motion';

const Orders = () => {
  const { orders, ani_content, ani_container } = useCartContext();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  if (orders.length === 0) {
    return <SVGData SVG={SVG} text='No orders' />;
  }
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={ani_container} animate='animate' initial='initial'>
        <TopBanner
          image={bimage}
          title='happyShopping'
          text='Hope we made you smile'
        />
        <motion.div variants={ani_content} className={styles.container}>
          {orders.map((curElem) => {
            return <OrderCard key={curElem.id} {...curElem} />;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Orders;
