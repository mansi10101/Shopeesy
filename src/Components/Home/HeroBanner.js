import React from 'react';
import image from '../../assets/img/hero4.png';
import styles from '../../stylesheets/Home.module.css';


const HeroBanner = () => {
  return (
    <div className={styles.heroImage}>
      <img className={styles.heroImage} src={image} alt='hero' />
      <div className={styles.heroText}>
        <p className={styles.httext1}>Trade-in Offer</p>
        <p className={styles.httext2}> Super value deals</p>
        <p className={styles.httext2} style={{ color: 'green' }}>
          {' '}
          On all products
        </p>
        <p className={styles.httext3}>
          Save more with Coupons and upto 70% off!
        </p>
        <a
          href=''
          className={styles.htbutton}
          style={{ backgroundColor: '#f14ebd' }}
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
