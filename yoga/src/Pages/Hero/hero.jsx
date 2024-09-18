// src/components/Hero.js
import React from 'react';
import {Link} from 'react-router-dom';
import './hero.css';

const Hero = () => {

  return (
    <section className="hero">
      <div className="container">
        <h1>Yogi Claire</h1>
        <img src='yogahero.jpg'/>
        <p>Uniting Your Body, Spirit & Mind</p>
        <div className='button-container'>
          <Link to='/classes'>
          <button className="cta-button">Explore Classes</button>
          </Link>
          <Link to='/yogaeducation'>
          <button className="cta-button">Yoga In Education</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
