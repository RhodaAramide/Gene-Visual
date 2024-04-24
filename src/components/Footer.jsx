import React from 'react'
import { Logo } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='section'>
          <div className='left-section'>
            <div className="logo-div">
              <img className="logo" src={Logo} alt="" />
              <h1>
                <span>Gen</span>
                Vista
              </h1>
            </div>
            <div className='footer-text'>
              This genome browser shows the 3D visualization of human genomes.
            </div>
            <div className='contact-icons'>
              <i><FontAwesomeIcon icon={faFacebook} className="big-icon"/> </i>
              <i> <FontAwesomeIcon icon={faYoutube} className="big-icon"/> </i>
              <i> <FontAwesomeIcon icon={faTwitter} className="big-icon"/> </i>
            </div>
            </div>
        </div>
        <div className='section'>
          <div className='center-section'>
            Pages 
            <li> <a href='#about'>About</a>  </li>
            <li> <a href='#features'>Features</a> </li>
            <li> <a href='#explore'>Explore</a> </li>  
          </div>
        </div>
        <div className='section'>
          <div className='right-section'>
            <p>CONTACT</p>
            <p>(234) 0000 0000</p>
            <p><a href="mailto:genvista@example.com">genvista@example.com</a></p>
            <p>For Support</p>
          </div>
        </div>
        <div className="copyright">
          &copy; 2024 RhodaAramide
        </div>
      </footer>
    </div>
  )
}

export default Footer