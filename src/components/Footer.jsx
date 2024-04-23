import React from 'react'
import { Logo } from '../assets'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='section'>
          <div className='left-section'>
            <div className="logo-div">
              <img src={Logo} alt="" />
              <h1>
                <span>Gen</span>
                Vista
              </h1>
            </div>
            <div className='footer-text'>
              This genome browser shows the 3D visualization of human genomes.
            </div>
            </div>
        </div>
        <div className='section'>
            Pages <br />
            About <br />
            Features <br />
            Explore <br />
        </div>
        <div className='section'>
          <p>CONTACT</p>
          <p>(234)0000 0000</p>
          <p><a href="mailto:genvista@example.com">genvista@example.com</a></p>
          <p>For Support</p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer