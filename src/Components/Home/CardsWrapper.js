import React from 'react';
import styles from '../../stylesheets/Card.module.css';
import Card from './Card';
import Carousel from 'react-elastic-carousel';
import { motion } from 'framer-motion';
import { useCartContext } from '../../context/cart_context';

const breakPonts = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];

const CardsWrapper = ({ h1, h2, products }) => {
  const {ani_container,ani_content} = useCartContext();
  return (
      <motion.section exit={{opacity:0}}>
        <motion.div variants={ani_container} animate="animate" initial="initial" className={styles.row}>
          <motion.div variants={ani_content} className={styles.heading}>
            <h2 className={styles.heading1}> {h1} </h2>
            <p className={styles.heading2}>{h2}</p>
          </motion.div>
          <br />
          <Carousel breakPoints={breakPonts}>
            {products.map((product) => {
              return (
                <Card
                  key={product.sno}
                  product={product}
                />
              );
            })}
          </Carousel>
        </motion.div>
      </motion.section>
  );
};

export default CardsWrapper;
