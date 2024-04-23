import React from 'react'
import { Logo } from '../assets'
import { Link } from 'react-router-dom';

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
        <li>About</li>
        <li>Features</li>
        <li>Explore</li>
      </ul>
      <div className="btns">
        <Link className="reg-btn" to={"/signup"}>
          <button>Register</button>
        </Link>
        <Link className="login-btn" to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar