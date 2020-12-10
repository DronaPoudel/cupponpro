import React from 'react';

import { SearchBar } from './../components/SearchBar';
import { User } from './../components/User';
import { CategoryRound } from './../components/CategoryRound';
import { Footer } from './../components/Footer';
import { TopCarousel } from './../components/TopCarousel';
import { SuperSlider } from './../components/SuperSlider';
import { PartnersCarousel } from './../components/PartnersCarousel';
import {Categories} from './../components/Categories';
// import {CategoryBar} from './../components/CategoryBar'

// import { TrendingCupons } from './../components/Card';
import {Header} from '../components/Header';

function Home() {
  return (
    <div className='HomeWrapper'>
      <Header />
      <User />
      <Categories/>
      <Categories/>

      {/* <CategoryBar/> */}
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
