import React from 'react';
import CardsWrapper from './CardsWrapper';
import Featured from './Featured';
import HeroBanner from './HeroBanner';
import MiddleBanner from './MiddleBanner';
import SMBanner from './SMBanner';
import { Feature, NewArrivals } from '../../utils/constants';
import { motion } from 'framer-motion';
import { useCartContext } from '../../context/cart_context';

const Home = () => {
  const {ani_container, ani_content} = useCartContext();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={ani_container} animate='animate' initial='initial'>
        <HeroBanner />

        <Featured />
        <motion.div
          variants={ani_container}
          animate='animate'
          initial='initial'
        >
          <CardsWrapper
            h1='Featured Products'
            h2='Summer Collection New Modern Designs'
            products={Feature}
          />
        </motion.div>
        <br />
        <br />
        <br />

        <MiddleBanner />
        <motion.div variants={ani_content}>
          <CardsWrapper
            h1='New Arrivals'
            h2='Summer Collection New Modern Designs'
            products={NewArrivals}
          />
        </motion.div>

        <br />
        <br />
        <SMBanner />
      </motion.div>
    </motion.section>
  );
};

export default Home;
