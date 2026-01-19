import React, { useState } from 'react'
import "../../css/Login.css";
const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const onChangeLogin = (e) => {
    const {name,value} = e.target;

    setUser((prev)=>({...prev,[name]:value}))
  }

  const onHandleLogin = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
   <div className="login-body">
  <div className="login-container">
    <div className="logo">
      <div className="logo-text">ASIAN</div>
    </div>
    <h1>Welcome Back</h1>
    <p className="subtitle">Enter your credentials to continue</p>
    <form onSubmit={onHandleLogin}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={onChangeLogin}
          value={user.email}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={onChangeLogin}
          value={user.password}
          required
        />
      </div>
      <div className="form-footer">
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </div>
      <button type="submit" className="submit-btn">
        Login
      </button>
      <div className="divider">
        <span>OR</span>
      </div>
      <div className="social-buttons">
        <button type="button" className="social-btn">
          Google
        </button>
        <button type="button" className="social-btn">
          GitHub
        </button>
      </div>
      <p className="register-link">
        Don't have an account? <a href="#">Create one</a>
      </p>
    </form>
  </div>
</div>

  )
}

export default Login
