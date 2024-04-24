import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const AboutSection = () => {
  return (
    <div id='about' className='about-section'> 
      <h1>About</h1>
      <p className="about-text">
        This Genome Browser is a comprehensive web-based tool designed to visualize, 
        analyze, and annotate genomic data. It offers an intuitive user interface 
        with features such as zooming, panning, and searching, along with 
        customizable visualization settings. Users can explore various genomic data
        tracks, add annotations, customize visualization, facilitating 
        genomic research and analysis in diverse fields such as genetics, 
        molecular biology, and bioinformatics.
      </p>
      <div className='about-div'>
        <button className='about-btn'>          
          Login 
          <FontAwesomeIcon className="icon" icon={faArrowRight}  />
        </button>
      </div>
    </div>
  )
}

export default AboutSection