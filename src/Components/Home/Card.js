import React from 'react';
import styles from '../../stylesheets/Card.module.css';
import Rating from '@mui/material/Rating';

const Card = ({ image }) => {
  const [value, setValue] = React.useState(5);

  return (
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
  );
};

export default Card;
