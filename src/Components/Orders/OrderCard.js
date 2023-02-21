import React from 'react'
import styles from '../../stylesheets/Orders.module.css';


const OrderCard = ({id, name, img, price, quantity}) => {
    return (
        
        <div className={styles.Cart_box}>
          <div className={styles.product}>
            <div className={styles.p_img}>
              <img src={img} alt='' />
            </div>
            <div className={styles.p_details}>
              <div className={styles.item}>
                <h2>{name}</h2>
              </div>
              <div className={styles.item}>
                <h2>${price}</h2>
              </div>
              <div className={styles.item}>
                <h2>Quanity: {quantity}</h2>
              </div>
              <div className={styles.item}>
                <h2>Size: XL</h2>
              </div>
              <div className={styles.item}>
                <button className={styles.remove_button}>Cancel Item</button>
              </div>
            </div>
          </div>
        </div>
     
    )
}

export default OrderCard
