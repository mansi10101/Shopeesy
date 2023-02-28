import React, { Fragment } from 'react';
import { useCartContext } from '../context/cart_context';
import styles from '../stylesheets/Shop.module.css';
import { motion } from 'framer-motion';

const TopBanner = ({ image, title, text }) => {
  const {ani_header} = useCartContext();
  return (
    <Fragment>
      <motion.div variants={ani_header}
        id={styles.mbanner}
        className={styles.section_m1}
        style={{
          backgroundImage: `url(${image})`,
          minHeight: '30vh',
        }}
      >
        <h1 className={styles.btext2} style={{ fontFamily: 'cursive' }}>
          {' '}
          <span> #</span>
          {title}
        </h1>
        <h2 className={styles.btext1}> {text} </h2>
      </motion.div>
    </Fragment>
  );
};

export default TopBanner;
