import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-div">
        <img src={Logo} alt="" />
        <h1>
          <span>Gen</span>
          Vista
        </h1>
      </div>      
      <ul className="nav-link">
        <li> <a href='#about'>About</a>  </li>
        <li> <a href='#features'>Features</a> </li>
        <li> <a href='#explore'>Explore</a> </li>        
      </ul>    
      <div className="btns">
        <Link className="reg-btn" to={"/signup"}>
          <button>
            <FontAwesomeIcon className="icon" icon={faSquareArrowUpRight}  />
            Register 
          </button>
        </Link>
        <Link className="login-btn" to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar