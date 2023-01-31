import React from 'react'
import styles from '../../stylesheets/Feature.module.css';

const SingleFeature = ({image,text,colour}) => {
    return (
        <>
            <li className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <img src={image} />
              </div>
              <div className={styles.card_content}>
                <button className={styles.btn} style={{background:`${colour}`}}>{text}</button>
              </div>
            </div>
          </li>
        </>
    )
}

export default SingleFeature
