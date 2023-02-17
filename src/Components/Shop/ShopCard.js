import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../stylesheets/Shop.module.css';
import Rating from '@mui/material/Rating';

const ShopCard = ({ key,product }) => {

  return (
    <Fragment>
      <Link to={ `product/${product.id} `}>
    <div className={styles.product}>
      <div className={styles.product_thumb}>
        <a href='#'>
          <img src={product.img} alt='' />
        </a>
      </div>
      <div className={styles.product_body}>
        <div className={styles.title}>
          <h6 style={{ marginTop: '10px' }}>{product.name}</h6>
        </div>
        <div className={styles.card_content}>
          <div className={styles.star}>
          <Rating name='read-only' value={product.rating} readOnly />
          </div>

          <div className={styles.price}>
            <span>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </Fragment>
  );
};

export default ShopCard;
