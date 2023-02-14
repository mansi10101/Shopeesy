import React from 'react';
import CardsWrapper from './CardsWrapper';
import Featured from './Featured';
import HeroBanner from './HeroBanner';
import MiddleBanner from './MiddleBanner';


const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Featured/>
      <CardsWrapper/>
      <MiddleBanner/>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
