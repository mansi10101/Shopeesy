import React from 'react';
import { AllProducts } from '../../utils/constants';
import Rating from '@mui/material/Rating';
import styles from '../../stylesheets/Shop.module.css';
import CardsWrapper from '../Home/CardsWrapper';
import { Feature } from '../../utils/constants';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Quantity from './Quantity';
import { useCartContext } from '../../context/cart_context';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from './Alert';
import { motion } from 'framer-motion';



const Product = () => {
  const { addToCart,ani_container,ani_img} = useCartContext();

  const [item, setItem] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);
  const [alert, setAlert] = React.useState(false);
  const [size, setSize] = React.useState('');
  const [error, setError] = React.useState(false);

  const pid = (p_id) => {
    const product = AllProducts.filter((i) => i.id === p_id);
    setItem(product[0]);
  };

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
  };
  const handleAddToCartBtn = () => {
    if (size === '') {
      setError(true);
    } else {
      addToCart(quantity, item, size);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    }
  };

  React.useEffect(() => {
    const id = window.location.pathname.split('/');
    pid(id[2]);
    window.scroll(0,0)
  }, []);
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        variants={ani_container}
        animate='animate'
        initial='initial'
        className={styles.app}
      >
        <div className={styles.details}>
          <motion.div variants={ani_img} className={styles.big_img}>
            <img src={item.img} alt='' />
          </motion.div>

          <div className={styles.box}>
            <div className={styles.row}>
              <h2>{item.name}</h2>
              <span>${item.price}</span>
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
            <h3
              style={{
                display: 'flex',
                alignItems: 'baseline',
                fontWeight: '500',
                fontSize: '1.5rem',
              }}
            >
              Size :
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  sx={{ fontWeight: 545, fontSize: 22 }}
                  value={size}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem sx={{ fontWeight: 545, fontSize: 18 }} value=''>
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: 545, fontSize: 18 }} value={'S'}>
                    S
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: 545, fontSize: 18 }} value={'M'}>
                    M
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: 545, fontSize: 18 }} value={'L'}>
                    L
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: 545, fontSize: 18 }} value={'XL'}>
                    XL
                  </MenuItem>
                </Select>
                {error && size === '' && (
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '400',
                      color: 'red',
                    }}
                  >
                    Please select the size
                  </h3>
                )}
              </FormControl>
            </h3>

            <Quantity
              quantity={quantity}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
            />

            <button
              className={styles.addtocartbtn}
              onClick={handleAddToCartBtn}
            >
              Add to cart
            </button>
            <Alert open={alert} text='Added to the Cart' />
          </div>
        </div>
      </motion.div>
      <CardsWrapper h1='Featured Products' products={Feature} />
    </motion.section>
  );
};

export default Product;
