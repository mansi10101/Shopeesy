import React from 'react';
import CardsWrapper from './CardsWrapper';
import Featured from './Featured';
import HeroBanner from './HeroBanner';
import MiddleBanner from './MiddleBanner';
import SMBanner from './SMBanner';
import {Feature} from '../../utils/constants';


const Home = () => {
  return (
    <div>

      <HeroBanner />

      <Featured />

      <CardsWrapper
        h1='Featured Products'
        h2='Summer Collection New Modern Designs'
        feature = {Feature}
      />
      <br/>
      <br/><br/>

      <MiddleBanner />

      <CardsWrapper
        h1='New Arrivals'
        h2='Summer Collection New Modern Designs'
        feature = {Feature}
      />
      <br />
      <br />
      <SMBanner/>
      
    </div>
  );
};

export default Home;
