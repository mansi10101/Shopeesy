import React from 'react';
import TopBanner from '../TopBanner';
import bimage from '../../assets/img/about/banner.png';
import Address from './Address';
import { motion } from 'framer-motion';
import { useCartContext } from '../../context/cart_context';


const Contact = () => {
  const {ani_content,ani_container} = useCartContext();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={ani_container} animate='animate' initial='initial'>
        
          <TopBanner
            image={bimage}
            title='lets_talk'
            text='LEAVE A MESSAGE! We love to hear from you :)'
          />
        <motion.div variants={ani_content}>
          <Address />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
