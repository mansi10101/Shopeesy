import React from 'react';
import TopBanner from './TopBanner';
import bimage from '../assets/img/about/banner.png';

const Contact = () => {
  return (
    <div>
      <TopBanner
        image={bimage}
        title='lets_talk'
        text='LEAVE A MESSAGE! We love to hear from you :)'
      />
    </div>
  );
};

export default Contact;
