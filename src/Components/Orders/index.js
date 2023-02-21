import React from 'react';
import bimage from '../../assets/img/banner/b6.jpg';
import TopBanner from '../TopBanner';
import { useCartContext } from '../../context/cart_context';
import OrderCard from './OrderCard';
import styles from '../../stylesheets/Orders.module.css';
import SVGData from '../SVGData';
import { ReactComponent as SVG } from '../../assets/svg/no-orders.svg';


const Orders = () => {
  const { orders } = useCartContext();

  if (orders.length === 0) {
    return <SVGData SVG={SVG} text="No orders" />;
  }
  return (
    <div>
      <TopBanner
        image={bimage}
        title='happyShopping'
        text='Hope we made you smile'
      />
      <div className={styles.container}>
        {orders.map((curElem) => {
          return <OrderCard key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
