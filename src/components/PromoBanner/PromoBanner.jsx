import React from 'react';
import PromoBannerItem from './PromoBannerItem';
import "./PromoBanner.scss";

const PromoBanner = () => {
  return (
    <div className='promoBanner'>
    <h2>Discover Products</h2>
        <div className="promoBannerWrapper">
      <PromoBannerItem image="/images/promobanner/daian-gan-8_d05sj9JVc-unsplash.jpg" title="School Stationary Items" desc="save 30%" align="left" />
      <PromoBannerItem image="/images/promobanner/northfolk-kr-FHgk3BRY-unsplash.jpg" title="Gifts & Decorations" desc="save 10%" />
      <PromoBannerItem image="/images/promobanner/northfolk-Ok76F6yW2iA-unsplash.jpg" title="Office Stationary Items" desc="save 20%" align="right" />
      </div>
    </div>
  )
}

export default PromoBanner;