import React, { Fragment } from 'react';
import styles from '../../stylesheets/Card.module.css';
import Card from './Card';
import Carousel from 'react-elastic-carousel';

const breakPonts = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CardsWrapper = ({ h1, h2, f1, f2, f3, f4, f5, f6, f7, f8 }) => {
  return (
    <Fragment>
      <section>
        <div className={styles.row}>
          <div className={styles.heading}>
            <h2 className={styles.heading1}> {h1} </h2>
            <p className={styles.heading2}>{h2}</p>
          </div>
          <br />
          <Carousel breakPoints={breakPonts}>
            <Card image={f1} />
            <Card image={f2} />
            <Card image={f3} />
            <Card image={f4} />
            <Card image={f5} />
            <Card image={f6} />
            <Card image={f7} />
            <Card image={f8} />
            <Card image={f1} />
            <Card image={f2} />
            <Card image={f3} />
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default CardsWrapper;
