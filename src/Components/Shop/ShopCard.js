import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../stylesheets/Shop.module.css';
import Rating from '@mui/material/Rating';

const ShopCard = ({ image }) => {
  const [value, setValue] = React.useState(5);

  return (
    <Fragment>
      <Link to={ '/product' }>
    <div className={styles.product}>
      <div className={styles.product_thumb}>
        <a href='#'>
          <img src={image} alt='' />
        </a>
      </div>
      <div className={styles.product_body}>
        <div className={styles.title}>
          <h6 style={{ marginTop: '10px' }}>Acousie Printed Shirt</h6>
        </div>
        <div className={styles.card_content}>
          <div className={styles.star}>
            <Rating name='read-only' value={value} readOnly />
          </div>

          <div className={styles.price}>
            <span>18$</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
    </Fragment>
  );
};

export default ShopCard;
