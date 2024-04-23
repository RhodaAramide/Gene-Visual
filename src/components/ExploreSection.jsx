import React from 'react'
import { exploreImg } from '../assets'
import { Link } from 'react-router-dom';

const ExploreSection = () => {
  return (
    <div className='explore-section'>
      <div className='left-section'>
        <h1>Explore Genome Browser </h1>
        <p>This genome browser shows the 3D visualization of human genomes. <br />
          Are you ready to explore and visualise the human genes we have? <br />
          Let's go!</p>        
          <Link className='explore-link' to={"/explore"}>
            <button className="explore-btn">Explore</button>
          </Link>        
      </div>
      <div className='right-section'>
        <img src={exploreImg} alt="" />
      </div>
    </div>

  )
}

export default ExploreSection