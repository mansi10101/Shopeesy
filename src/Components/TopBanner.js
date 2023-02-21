import React, { Fragment } from 'react';
import styles from '../stylesheets/Shop.module.css';

const TopBanner = ({ image, title, text }) => {
  return (
    <Fragment>
      <section
        id={styles.mbanner}
        className={styles.section_m1}
        style={{
          backgroundImage: `url(${image})`,
          marginTop: '100px',
          minHeight: '40vh',
        }}
      >
        <h1 className={styles.btext2} style={{ fontFamily: 'cursive' }}>
          {' '}
          <span> #</span>
          {title}
        </h1>
        <h2 className={styles.btext1}> {text} </h2>
      </section>
    </Fragment>
  );
};

export default TopBanner;
