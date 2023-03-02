import React from 'react';
import styles from '../../stylesheets/Card.module.css';
import Card from './Card';
import { motion } from 'framer-motion';
import { useCartContext } from '../../context/cart_context';


const CardsWrapper = ({ h1, h2, products }) => {
  const {ani_container,ani_content} = useCartContext();
  return (
    <motion.section exit={{ opacity: 0 }} className={styles.container} >
      <motion.div
        variants={ani_container}
        animate='animate'
        initial='initial'
        className={styles.row}
      >
        <motion.div variants={ani_content} className={styles.heading}>
          <h2 className={styles.heading1}> {h1} </h2>
          <p className={styles.heading2}>{h2}</p>
        </motion.div>
        <br />
        <div className={styles.card_container} >
          {products.map((product) => {
            return <Card key={product.sno} product={product} />;
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CardsWrapper;
