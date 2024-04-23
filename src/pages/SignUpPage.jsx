import React, { useState } from "react";
import { Logo } from '../assets'

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up...', username, email, password);
  };

  return (
    <div className="signup-form-container">
      <div className="logo-div">
        <img src={Logo} alt="" />
        <h1>
          <span>Gen</span>
          Vista
        </h1>
      </div>
      <form id='signup-form' className="signup-form" onSubmit={handleSubmit}>
        <h2>Let's get you started</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='register-btn' type="submit">Register</button>
      </form>
    </div>
  );
};
  
export default SignUpPage;
