import React, { useState } from 'react'
import "../../css/Login.css";
import  supabase  from '../../Database/supabase';
import { Link, useNavigate } from 'react-router';
import { FetchCartThunk } from '../../store/cartThunk';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onChangeLogin = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }))
  }

   const validateUser = (user) => {
    const errors = {};

    // Email validation
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      errors.email = "Invalid email format";
    }

    // Password validation
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }


    return errors;
  };


  const onHandleLogin = async (e) => {
    e.preventDefault();
    console.log(user);

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

    let { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password
    })

    if(error){
      console.error(error);
      toast.error("something went wrong!");
      return error;
    }
    console.log(data)

    let { data: profile,error:profileErr } = await supabase
  .from('profile')
  .select("*")
  .eq('id', data.user.id)
    console.log(profile)
    if (profileErr) {
      console.error(profileErr);
      toast.error("something went wrong!")
      return profileErr;
    }else{
    // let localstore = localStorage.setItem("user",JSON.stringify(profile))
    toast.success("login successfully.");
    FetchCartThunk(profile.id)
    navigate("/")
    }

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
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          <div className="divider">
            <span>OR</span>
          </div>
          {/* <div className="social-buttons">
            <button type="button" className="social-btn">
              Google
            </button>
            <button type="button" className="social-btn">
              GitHub
            </button>
          </div> */}
          <p className="register-link">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        </form>
      </div>
    </div>

  )
}

export default Login
