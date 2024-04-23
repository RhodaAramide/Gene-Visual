import React from 'react'
import { hero } from '../assets';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-container">
        <h1 className="hero-text">
          Join the <span>world</span> of Bioinformatics and Human <span>Genes</span>
        </h1>
        <p>
          Join the global community of researchers, data scientists, and
          innovators as we decode the secrets hidden within our very cells.
        </p>
        <Link to={"/login"}>
        <button className="login-btn">Get Started</button>
        </Link>
      </div>
      <div className="right-container">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default HeroSection