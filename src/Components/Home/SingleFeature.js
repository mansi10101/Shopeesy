import React from 'react'
import styles from '../../stylesheets/Feature.module.css';

const SingleFeature = ({image,text,colour}) => {
    return (
      <div className={styles.cards_item}>
        <li>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={image} alt='' />
            </div>
            <div className={styles.card_content}>
              <button
                className={styles.btn}
                style={{ background: `${colour}` }}
              >
                <p>{text}</p>
              </button>
            </div>
          </div>
        </li>
      </div>
    );
}

export default SingleFeature
