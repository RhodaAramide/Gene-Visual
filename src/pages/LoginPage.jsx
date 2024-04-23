import React, { useState } from "react";
import { Logo } from '../assets'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in...', username, password);
  };

  return (
    <div className="login-form-container">
      <div className="logo-div">
        <img src={Logo} alt="" />
        <h1>
          <span>Gen</span>
          Vista
        </h1>
      </div>
      <form id='login-form' className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-btn' type="submit">Login</button>
        <div>
          <span className="password">
            <a href="#">Forgot password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}; 

export default LoginPage;
