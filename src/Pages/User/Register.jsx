import React, { useState } from 'react'
import "../../css/Register.css"
import supabase from '../../Database/supabase'
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
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


  const validateUser = (user) => {
    const errors = {};

    // Name validation
    if (!user.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      errors.email = "Invalid email format";
    }

    // Age validation
    if (!user.age) {
      errors.age = "Age is required";
    } else if (user.age < 1 || user.age > 120) {
      errors.age = "Enter a valid age";
    }

    // Phone validation (10 digits)
    if (!user.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(user.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // Gender validation
    if (!user.gender) {
      errors.gender = "Gender is required";
    }

    // Address validation
    if (!user.address.trim()) {
      errors.address = "Address is required";
    }

    // Pincode validation (6 digits)
    if (!user.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^[0-9]{6}$/.test(user.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }

    // City validation
    if (!user.city.trim()) {
      errors.city = "City is required";
    }

    // State validation
    if (!user.state.trim()) {
      errors.state = "State is required";
    }

    // Country validation
    if (!user.country.trim()) {
      errors.country = "Country is required";
    }

    return errors;
  };


  const onHandleRegister = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    //validation section
    const validationErrors = validateUser(user);

    if (Object.keys(validationErrors).length > 0) {
    toast.warning("Please fill all required fields correctly");
    for (let key in validationErrors){
      toast.warning(validationErrors[key])
    }
    return;
    } else {
      toast.success("Form Submitted Successfully");
    }


    try {
      // 1️⃣ Signup
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
      });

      if (error) {
        console.error("Signup error:", error.message);
        toast.error("something went wrong!")
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
        toast.error("something went wrong!")
        console.error("Profile error:", profileError.message);
        return;
      }

      toast.success("User registered successfully ✅")
      console.log("User registered successfully ✅");
      navigate("/signin")
    } catch (err) {
      toast.error("Something went wrong!")
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
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
