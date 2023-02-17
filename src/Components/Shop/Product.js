import React from 'react';
import { AllProducts } from '../../utils/constants';
import Rating from '@mui/material/Rating';
import styles from '../../stylesheets/Shop.module.css';

const Product = () => {
  const [item, setItem] = React.useState({});

  const pid = (p_id) => {
    const product = AllProducts.filter((i) => i.id === p_id);
    setItem(product[0]);
  };
  React.useEffect(() => {
    const id = window.location.pathname.split('/');
    pid(id[2]);
  }, []);
  console.log(item)

  return (
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
            repellat voluptas eum voluptatem perferendis, voluptates blanditiis
            odio quam suscipit non hic omnis.
          </p>
          <p>
            Rating: <Rating name='read-only' value='5' readOnly/>
          </p>
          <button className={styles.cart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
