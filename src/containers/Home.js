import React from 'react';

import { SearchBar } from './../components/SearchBar';
import { User } from './../components/User';
import { CategoryRound } from './../components/CategoryRound';
import { Footer } from './../components/Footer';
import { TopCarousel } from './../components/TopCarousel';
import { SuperSlider } from './../components/SuperSlider';
import { PartnersCarousel } from './../components/PartnersCarousel';
// import { TrendingCupons } from './../components/Card';

function Home() {
  return (
    <div className='HomeWrapper'>
      <SearchBar />
      <User />
      <CategoryRound />
      <TopCarousel />
      <SuperSlider />
      {/* <TrendingCupons /> */}
      <PartnersCarousel />
      <Footer />
    </div>
  );
}

export default Home;
