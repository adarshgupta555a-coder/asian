import React, { useState } from 'react'
import "../../css/Register.css"
import supabase  from '../../Database/supabase'
import { useNavigate } from 'react-router'
const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [user, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    password: "",
    gender: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: ""
  })

  const onChangeRegister = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
const onHandleRegister = async (e) => {
  e.preventDefault();

  if (loading) return;
  setLoading(true);

  try {
    // 1️⃣ Signup
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (error) {
      console.error("Signup error:", error.message);
      return;
    }

    const userId = data.user.id;

    const { error: profileError } = await supabase
      .from("profile")
      .insert([
        {
          id: userId,   
          name: user.name,
          email: user.email,
          age: user.age,
          phone: user.phone,
          gender: user.gender,
          address: user.address,
          pincode: user.pincode,
          city: user.city,
          state: user.state,
          country: user.country,
        },
      ]);

    if (profileError) {
      console.error("Profile error:", profileError.message);
      return;
    }

    console.log("User registered successfully ✅");
    navigate("/signin")
  } catch (err) {
    console.error("Unexpected error:", err);
  } finally {
    setLoading(false); 
  }
};

  return (
    <div className='register-body'>
      <div className="register-container">
        <div className="logo">
          <div className="logo-text">ASIAN</div>
        </div>
        <h1>Create Account</h1>
        <p className="subtitle">Fill in the details to get started</p>
        <form onSubmit={onHandleRegister}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={onChangeRegister}
                value={user.name}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={onChangeRegister}
                value={user.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                onChange={onChangeRegister}
                value={user.phone}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                min={1}
                max={120}
                onChange={onChangeRegister}
                value={user.age}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select name="gender" required value={user.gender} onChange={onChangeRegister}>
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
                name="password"
                placeholder="Create password"
                onChange={onChangeRegister}
                value={user.password}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address *</label>
              <textarea
                name="address"
                placeholder="Enter your address"
                onChange={onChangeRegister}
                value={user.address}
                required
              // defaultValue={data.address}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode *</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                onChange={onChangeRegister}
                value={user.pincode}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" name="city" placeholder="Enter city" required onChange={onChangeRegister}
                value={user.city} />
            </div>
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input type="text" name="state" placeholder="Enter state" required onChange={onChangeRegister}
                value={user.state} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input
                type="text"
                name="country"
                placeholder="Enter country"
                onChange={onChangeRegister}
                value={user.country}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
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
