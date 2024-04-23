import React from 'react'

const SignUpPage = () => {
  return (
    <div>
            
        <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" className="username" required />

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" className="password" required />

          <button type="submit">Register</button>
          
        </div>
             
    </div>
  )
}

export default SignUpPage