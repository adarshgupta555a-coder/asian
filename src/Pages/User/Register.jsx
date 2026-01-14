import React from 'react'
import "../../css/Register.css"
const Register = () => {
  return (
    <div className='register-body'>
    <div className="register-container">
  <div className="logo">
    <div className="logo-text">ASIAN</div>
  </div>
  <h1>Create Account</h1>
  <p className="subtitle">Fill in the details to get started</p>
  <form>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age *</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          min={1}
          max={120}
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender *</label>
        <select id="gender" required="">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="password"
          placeholder="Create password"
          required=""
        />
      </div>
      <div className="form-group full-width">
        <label htmlFor="address">Address *</label>
        <textarea
          id="address"
          placeholder="Enter your address"
          required=""
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pincode *</label>
        <input
          type="text"
          id="pincode"
          placeholder="Enter pincode"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City *</label>
        <input type="text" id="city" placeholder="Enter city" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="state">State *</label>
        <input type="text" id="state" placeholder="Enter state" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country *</label>
        <input
          type="text"
          id="country"
          placeholder="Enter country"
          required=""
        />
      </div>
    </div>
    <button type="submit" className="submit-btn">
      Register
    </button>
    <p className="login-link">
      Already have an account? <a href="#">Sign in</a>
    </p>
  </form>
</div>
</div>
  )
}

export default Register
