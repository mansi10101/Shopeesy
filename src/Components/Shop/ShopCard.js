import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../stylesheets/Shop.module.css';
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';

const ShopCard = ({ product }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ y: 20 }}
      transition={{ duration: 3 }}
    >
      <Link to={`/product/${product.id} `}>
        <div className={styles.singlecard}>
          <div className={styles.product}>
            <div className={styles.product_thumb}>
              <img src={product.img} alt='' />
            </div>
            <div className={styles.product_body}>
              <div className={styles.title}>
                <h6 style={{ marginTop: '10px' }}>{product.name}</h6>
              </div>
              <div className={styles.card_content}>
                <div className={styles.star}>
                  <Rating name='read-only' sx={{fontSize:"1rem"}} value={product.rating} readOnly />
                </div>

                <div className={styles.price}>
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ShopCard;
