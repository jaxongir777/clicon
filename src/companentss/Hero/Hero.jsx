import React, { useState, useEffect } from 'react';
import hero1 from './hero.images/hero1.png';
import hero2 from './hero.images/hero2.png';
import hero3 from './hero.images/hero3.png';
import './hero.css';

function Hero() {
  const images = [hero1, hero2, hero3]; // rasm array
  const [current, setCurrent] = useState(0);

  // 3 soniyada rasm almashtirish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3000ms = 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero-container'>
          <div className='hero-item'>
            <h1 className='hero-title'>Xbox Consoles</h1>
            <p className='hero-text'>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
            </p>
            <button><a href="#">Shop Now</a></button>
          </div>
          <img src={images[current]} alt="Hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;