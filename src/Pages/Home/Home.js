import React from 'react';
import AboutSection from './AboutSection';
import Banner from './Banner';
import Finance from './Finance';
import Inventories from './Inventories';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <AboutSection></AboutSection>
      <Finance></Finance>
    </div>
  );
};

export default Home;