import React from 'react';
import styles from '../stylesheets/About.module.css';
import bimage from '../assets/img/about/banner.png';
import TopBanner from './TopBanner';
import image from '../assets/img/about/a6.jpg';
import Featured from './Home/Featured';

const About = () => {
  return (
    <div>
      <TopBanner
        image={bimage}
        title='knowUs'
        text='Lets know us more better'
      />

      <div className={styles.app}>
        <div className={styles.details}>
          <div className={styles.big_img}>
            <img src={image} alt='' />
          </div>
          <div className={styles.box}>
            <div className={styles.row}>
              <h2>Who Are We?</h2>
            </div>
            <p>
            Clothing defines your personality! Yes, that is absolutely right. You must understand that fashion clothing found at Beyoung, The best Online Shopping Site in India, would never let you compromise on your style. We cater a large variety of clothing online to ornate your wardrobe easily!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum vel repudiandae possimus commodi, soluta officiis animirepellat voluptas eum voluptatem perferendis, voluptate blanditiis odio quam suscipit non hic omnis.
            </p>
          </div>
        </div>
      </div>
      <Featured/>
    </div>
  );
};

export default About;
