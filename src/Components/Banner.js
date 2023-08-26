import React, {useState, useEffect} from 'react';
import { banners} from '../data/data';

const Banner = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const SLIDE_INTERVAL = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);
return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <div
          key={`${banner}-${index}`}
          className={`banner-slide ${index === currSlide ? 'active' : ''}`}
        >
          {banner.text}
        </div>
      ))}
    </div>
  );
};

export default Banner;