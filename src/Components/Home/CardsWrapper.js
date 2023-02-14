import React, { Fragment } from 'react';
import styles from '../../stylesheets/Card.module.css'
import Card from './Card';
import Carousel from "react-elastic-carousel"
import f1 from '../../assets/img/products/f1.jpg'
import f2 from '../../assets/img/products/f2.jpg'
import f3 from '../../assets/img/products/f3.jpg'
import f4 from '../../assets/img/products/f4.jpg'
import f5 from '../../assets/img/products/f5.jpg'
import f6 from '../../assets/img/products/f6.jpg'



const breakPonts = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 5},
];


const CardsWrapper = () => {
  
  return (
    <Fragment>
      <section>
        <div className={styles.row}>
          <div className={styles.heading}>
            <h2 className={styles.heading1}> Featured Products </h2>
            <p className={styles.heading2}>Summer Collection New Modern Designs</p>
          </div>
          <br/>
          <Carousel breakPoints={breakPonts}>
            <Card image= {f1} />
            <Card image= {f2}/>
            <Card image= {f3}/>
            <Card image= {f4}/>
            <Card image= {f5}/>
            <Card image= {f6}/>
            <Card image= {f1}/>
            <Card image= {f2}/>
            <Card image= {f3}/>
            <Card image= {f4}/>
            <Card image= {f5}/>
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default CardsWrapper;
