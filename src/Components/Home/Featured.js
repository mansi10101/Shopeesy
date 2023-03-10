import React from 'react';
import styles from '../../stylesheets/Feature.module.css';
import SingleFeature from './SingleFeature';
import f1 from '../../assets/img/features/f1.png';
import f2 from '../../assets/img/features/f2.png';
import f3 from '../../assets/img/features/f3.png';
import f4 from '../../assets/img/features/f4.png';
import f5 from '../../assets/img/features/f5.png';
import f6 from '../../assets/img/features/f6.png';
import { useCartContext } from '../../context/cart_context';
import { motion } from 'framer-motion';

const Featured = () => {
  const {ani_content} = useCartContext();
  return (
    <motion.div variants={ani_content}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <SingleFeature image={f1} text='Free Shipping' colour='#FFC0CB' />
          <SingleFeature image={f2} text='Online Order' colour='#98FB98' />
          <SingleFeature image={f3} text='Save Money' colour='#ADD8E6' />
          <SingleFeature image={f4} text='So. Promos' colour='#D8BFD8' />
          <SingleFeature image={f5} text='Happy Sell' colour='#DEB887' />
          <SingleFeature image={f6} text='24/7 Support' colour='#F0E68C' />
        </div>
      </div>
    </motion.div>
  );
};

export default Featured;
