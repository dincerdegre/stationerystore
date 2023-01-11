import React from 'react'
import Categories from '../../components/Categories/Categories';
import Newsletter from '../../components/Newsletter/Newsletter';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Newsletter />
      <PromoBanner />
      <Categories />
    </div>
  )
}

export default Home