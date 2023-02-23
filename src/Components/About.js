import React from 'react';
import styles from '../stylesheets/About.module.css';
import bimage from "../assets/img/banner/b1.jpg"
import TopBanner from './TopBanner';
import image from '../assets/img/about/a6.jpg';
import Featured from './Home/Featured';
import { motion } from 'framer-motion';
import { useCartContext } from '../context/cart_context';

const About = () => {
  const { ani_content, ani_container } = useCartContext();

 React.useEffect(() => {
   window.scroll(0, 0);
 }, []);

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={ani_container} animate='animate' initial='initial'>
        <TopBanner
          image={bimage}
          title='knowUs'
          text='Lets know us more better'
        />

        <motion.div variants={ani_content} className={styles.app}>
          <div className={styles.details}>
            <div className={styles.big_img}>
              <img src={image} alt='' />
            </div>
            <div className={styles.box}>
              <div className={styles.row}>
                <h2>Who Are We?</h2>
              </div>
              <p>
                Clothing defines your personality! Yes, that is absolutely
                right. You must understand that fashion clothing found at
                Beyoung, The best Online Shopping Site in India, would never let
                you compromise on your style. We cater a large variety of
                clothing online to ornate your wardrobe easily!!Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Harum dolorum vel
                repudiandae possimus commodi, soluta officiis animirepellat
                voluptas eum voluptatem perferendis, voluptate blanditiis odio
                quam suscipit non hic omnis.
              </p>
            </div>
          </div>
        </motion.div>
        <Featured />
      </motion.div>
    </motion.section>
  );
};

export default About;
