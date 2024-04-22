import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        GenVista
        <ul className='nav-link'>
            <li>ABOUT</li>
            <li>FEATURES</li>
            <li>EXPLORE</li>
        </ul>
        <button  className='nav-btn'>Log in</button>
        <button className='nav-btn'>Register</button>
    </div>
  )
}

export default Navbar