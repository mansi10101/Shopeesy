import React from 'react';
import styles from '../../stylesheets/Shop.module.css';
import TopBanner from '../TopBanner';
import ShopCard from '../Shop/ShopCard';
import { AllProducts } from '../../utils/constants';
import bimage from '../../assets/img/banner/b8.jpg';
import { motion } from 'framer-motion';
import { useCartContext } from '../../context/cart_context';

const Shop = () => {
  const { ani_content, ani_container} = useCartContext();
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        variants={ani_container}
        animate='animate'
        initial='initial'
        className={styles.shopbody}
      >
          <TopBanner
            image={bimage}
            title='shopOnline'
            text='Save more with coupons & upto 70% off'
          />
        <motion.div variants={ani_content} className={styles.cards}>
          {AllProducts.map((product) => {
            return <ShopCard key={product.sno} product={product} />;
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Shop;
