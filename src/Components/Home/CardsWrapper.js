import React, { Fragment } from 'react';
import styles from '../../stylesheets/Card.module.css';
import Card from './Card';
import Carousel from 'react-elastic-carousel';

const breakPonts = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

const CardsWrapper = ({ f1,h1, h2, products }) => {
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
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                />
              );
            })}
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default CardsWrapper;
