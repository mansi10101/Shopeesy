import React, { Fragment } from 'react';
import { AllProducts } from '../../utils/constants';
import Rating from '@mui/material/Rating';
import styles from '../../stylesheets/Shop.module.css';
import CardsWrapper from '../Home/CardsWrapper';
import { Feature } from '../../utils/constants';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Quantity from './Quantity';

const Product = ({cartItems, setCartItems}) => {
  const [item, setItem] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);

  const pid = (p_id) => {
    const product = AllProducts.filter((i) => i.id === p_id);
    setItem(product[0]);
  };
  React.useEffect(() => {
    const id = window.location.pathname.split('/');
    pid(id[2]);
  }, []);
  
  const handleCartItem = () => {
      setCartItems([...cartItems, {...item,quantity}]);
      // alert("added")
  }
  console.log(cartItems)
  return (
    <Fragment>
      <div className={styles.app}>
        <div className={styles.details}>
          <div className={styles.big_img}>
            <img src={item.img} alt='' />
          </div>

          <div className={styles.box}>
            <div className={styles.row}>
              <h2>{item.name}</h2>
              <span>{item.price}</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              dolorum vel repudiandae possimus commodi, soluta officiis animi
              repellat voluptas eum voluptatem perferendis, voluptates
              blanditiis odio quam suscipit non hic omnis.
            </p>
            <p>
              Rating: <Rating name='read-only' value='5' readOnly />
            </p>

            <div className={styles.product_warranty}>
              <div className={styles.product_details}>
                <LocalShippingIcon fontSize='large' />
                <p>Free Delivery</p>
              </div>
              <div className={styles.product_details}>
                <FindReplaceIcon fontSize='large' />
                <p> 30 Days Replacement</p>
              </div>
              <div className={styles.product_details}>
                <LocalShippingIcon fontSize='large' />
                <p>Fast Delivery</p>
              </div>
            </div>

            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <button className={styles.cart} onClick={() => handleCartItem()} >Add to cart</button>
          </div>
        </div>
      </div>
      <CardsWrapper h1='Featured Products' products={Feature} />
    </Fragment>
  );
};

export default Product;
