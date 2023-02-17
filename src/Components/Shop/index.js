import React from 'react';
import styles from '../../stylesheets/Shop.module.css';
import TopBanner from '../TopBanner';
import ShopCard from '../Shop/ShopCard';
import { AllProducts } from '../../utils/constants';
import bimage from "../../assets/img/banner/b1.jpg"

const Shop = () => {
  return (
    <div className={styles.shopbody}>
      <TopBanner image={bimage} title="shopOnline" text="Save more with coupons & upto 70% off" />
      <div className={styles.cards}>
        {AllProducts.map((product) => {
          return <ShopCard key={product.sno} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
