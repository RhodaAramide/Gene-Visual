import React from 'react'

const LoginPage = () => {
  return (
    <div>
      
        {/* <div class="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
        </div> */}

        <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" className="username" required />

          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" className="password" required />

          <button type="submit">Login</button>
          {/* <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label> */}
        </div>

        <div class="container">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="password">Forgot <a href="#">password?</a></span>
        </div>      
    </div>
  )
}

export default LoginPage