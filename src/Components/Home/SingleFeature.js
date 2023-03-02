import React from 'react';
import styles from '../../stylesheets/Feature.module.css';

const SingleFeature = ({ image, text, colour }) => {
  return (
    <div className={styles.cards_item}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={image} alt='' />
        </div>
        <div className={styles.card_content}>
            <p style={{ background: `${colour}`,textAlign:"center" }}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
