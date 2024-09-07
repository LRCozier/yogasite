// src/components/Hero.js
import React from 'react';
import './hero.css';

const Hero = () => {

  return (
    <section className="hero">
      <div className="container">
        <h1>Yoga With Claire</h1>
        <img src="/yogahero.jpg" alt="Yoga With Claire Hero Image" className="heroImage" />
        <p>Unite Your Body, Spirit & Mind</p>
        <div className='button-container'>
        <a href='#classes'><button className="cta-button">Explore Classes</button></a>
        <button className="cta-button">Yoga In Education</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
