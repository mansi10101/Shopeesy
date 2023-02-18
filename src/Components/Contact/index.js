import React from 'react';
import TopBanner from "../TopBanner"
import bimage from '../../assets/img/about/banner.png';
import Address from './Address';

const Contact = () => {
  return (
    <div>
      <section>
      <TopBanner
        image={bimage}
        title='lets_talk'
        text='LEAVE A MESSAGE! We love to hear from you :)'
      />
      </section>
      <section>
        <Address/>
      </section>
    </div>
  );
};

export default Contact;
