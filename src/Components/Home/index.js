import React from 'react';
import CardsWrapper from './CardsWrapper';
import Featured from './Featured';
import HeroBanner from './HeroBanner';
import MiddleBanner from './MiddleBanner';
import f1 from '../../assets/img/products/f1.jpg';
import f2 from '../../assets/img/products/f2.jpg';
import f3 from '../../assets/img/products/f3.jpg';
import f4 from '../../assets/img/products/f4.jpg';
import f5 from '../../assets/img/products/f5.jpg';
import f6 from '../../assets/img/products/f6.jpg';
import f7 from '../../assets/img/products/f7.jpg';
import f8 from '../../assets/img/products/f8.jpg';
import n1 from "../../assets/img/products/n1.jpg";
import n2 from "../../assets/img/products/n2.jpg";
import n3 from "../../assets/img/products/n3.jpg";
import n4 from "../../assets/img/products/n4.jpg";
import n5 from "../../assets/img/products/n5.jpg";
import n6 from "../../assets/img/products/n6.jpg";
import n7 from "../../assets/img/products/n7.jpg";
import n8 from "../../assets/img/products/n8.jpg";
import SMBanner from './SMBanner';


const Home = () => {
  return (
    <div>

      <HeroBanner />

      <Featured />

      <CardsWrapper
        h1='Featured Products'
        h2='Summer Collection New Modern Designs'
        f1={f1}
        f2={f2}
        f3={f3}
        f4={f4}
        f5={f5}
        f6={f6}
        f7={f7}
        f8={f8}
      />
      <br/>
      <br/><br/>

      <MiddleBanner />

      <CardsWrapper
        h1='New Arrivals'
        h2='Summer Collection New Modern Designs'
        f1={n1}
        f2={n2}
        f3={n3}
        f4={n4}
        f5={n5}
        f6={n6}
        f7={n7}
        f8={n8}
      />
      <br />
      <br />
      <SMBanner/>
      
    </div>
  );
};

export default Home;
