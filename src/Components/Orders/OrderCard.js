import React from 'react'
import styles from '../../stylesheets/Orders.module.css';
import { Link } from 'react-router-dom';

const OrderCard = ({id, name,size, img, price, quantity}) => {

    return (
      <div className={styles.Cart_box}>
        <div className={styles.product}>
          <Link to={`/product/${id} `}>
            <div className={styles.p_img}>
              <img src={img} alt='' />
            </div>
          </Link>
          <div className={styles.p_details}>
            <Link to={`/product/${id} `}>
              <div className={styles.itemtitle}>
                <h2>{name}</h2>
              </div>
            </Link>
            <div className={styles.item}>
              <h2>${price}</h2>
            </div>
            <div className={styles.item}>
              <h2>Quanity: {quantity}</h2>
            </div>
            <div className={styles.item}>
              <h2>Size: {size}</h2>
            </div>
            <div className={styles.item}>
              <button className={styles.remove_button}>Cancel Item</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OrderCard
