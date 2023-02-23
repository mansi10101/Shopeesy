import React from 'react';
import image from '../../assets/img/hero4.png';
import { useCartContext } from '../../context/cart_context';
import styles from '../../stylesheets/Home.module.css';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  const {ani_header,ani_content} = useCartContext(); 
  return (
    <motion.div variants={ani_header} className={styles.heroImage}>
      <img className={styles.heroImage} src={image} alt='hero' />
      <motion.div variants={ani_content} className={styles.heroText}>
        <motion.p variants={ani_content} className={styles.httext1}>Trade-in Offer</motion.p>
        <motion.p variants={ani_content} className={styles.httext2}> Super value deals</motion.p>
        <motion.p variants={ani_content} className={styles.httext2} style={{ color: 'green' }}>
          On all products
        </motion.p>
        <motion.p variants={ani_content} className={styles.httext3}>
          Save more with Coupons and upto 70% off!
        </motion.p>
        <button
          href=''
          className={styles.htbutton}
          style={{ backgroundColor: '#f14ebd' }}
        >
          SHOP NOW
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;
