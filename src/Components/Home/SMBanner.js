import React from 'react';
import styles from '../../stylesheets/Home.module.css';
import img1 from '../../assets/img/banner/b17.jpg';
import img2 from '../../assets/img/banner/b10.jpg';
import img3 from '../../assets/img/banner/b7.jpg';
import img4 from '../../assets/img/banner/b4.jpg';
import img5 from '../../assets/img/banner/b18.jpg';
import { useCartContext } from '../../context/cart_context';
import { motion } from 'framer-motion';

const SMBanner = () => {
  const {ani_content} = useCartContext();
  return (
    <motion.div variants={ani_content}>
      <section id={styles.smbanner}>
        <div
          className={styles.banner_box}
          style={{ backgroundImage: `url(${img1})` }}
        >
          <h2>crazy deals</h2>
          <h1>Buy 1 get 1 Free</h1>
          <span>The best classic dress is on sale at shopeesy</span>
          <button className={styles.smbutton}>Learn More</button>
        </div>
        <div
          className={styles.banner_box}
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h2>Spring/Summer</h2>
          <h1>Upcomming Season</h1>
          <span>The best classix dress is on sale at shopeesy</span>
          <button className={styles.smbutton}>Collection</button>
        </div>
      </section>
      <section id={styles.smbanner2} className={styles.psection}>
        <div
          className={styles.banner_box}
          style={{ backgroundImage: `url(${img3})` }}
        >
          <h1>SEASONAL SALE</h1>
          <h2>Winter Collection - 50% off</h2>
        </div>
        <div
          className={styles.banner_box}
          style={{ backgroundImage: `url(${img4})` }}
        >
          <h1>SEASONAL SALE</h1>
          <h2>Winter Collection - 50% off</h2>
        </div>
        <div
          className={styles.banner_box}
          style={{ backgroundImage: `url(${img5})` }}
        >
          <h1>SEASONAL SALE</h1>
          <h2>Winter Collection - 50% off</h2>
        </div>
      </section>
    </motion.div>
  );
};

export default SMBanner;
