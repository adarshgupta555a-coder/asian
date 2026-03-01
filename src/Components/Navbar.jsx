import React, { useState, useEffect, useCallback } from 'react';
import "../css/Navbar.css"
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store/AuthSlice';
import supabase from "../Database/supabase";
import { FetchCartThunk } from '../store/cartThunk';
import { toast } from 'react-toastify';

const Navbar = () => {
  const authData = useSelector((state) => state.Auth.value);
  const cartData = useSelector((state) => state?.Cart)
  const dispatch = useDispatch()
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (authData === null) {
      getUserData().then((res) => {
        console.log(res)
        dispatch(AuthAction.getSession(res[0]));
        dispatch(FetchCartThunk(res[0].id))
      })
    }
  }, [])

  const getUserData = async () => {

    const { data: { user }, error: userErr } = await supabase.auth.getUser()
    console.log(userErr);

    if (userErr) {
      toast.error("something went wrong!")
      navigate("/signin")
      return;
    }
    
    let { data: profile, error } = await supabase
      .from('profile')
      .select("*")
      .eq('id', user.id)
    console.log(profile)
    if (!error) {
      toast.success("Login successfully")
      return profile;
    } else {
      console.log(error)
      toast.error("something went wrong!")
      return ""
    }
  };


  const MobileMenu = () => {
    setMobile(prev => !prev);
  }

  const removeMobile = () => {
    setMobile(false);
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: 'shop' },
    { name: 'About', href: '/about' },
    { name: 'Categories', href: '/categories' },

  ];

  return (

    <>
      <header id="header">
        <img
          src="/logo.png"
          alt="Logo"
        />
        <ul id="navMenu" className={mobile ? "active" : ""}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.href} onClick={removeMobile}>
              <li>{item.name}</li>
            </Link>))}
        </ul>
        <div className="profile">
          <Link to="/search" style={{ color: "inherit", textDecoration: "none" }}>
            <i className="fa fa-search" />
          </Link>
          {authData ? <Link to="/profile" style={{ color: "inherit", textDecoration: "none" }}>
            <i className="fa fa-user" />
          </Link> : <Link to="/signin" style={{ color: "inherit", textDecoration: "none" }}>
            <i className="fa fa-user" />
          </Link>}
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="basket">
              <i className="fa fa-shopping-basket" />
              <span className="badge">{cartData?.length || 0}</span>
            </div>
          </Link>
        </div>
        <div className={`mobile-menu ${mobile ? "active" : ""}`} id="mobileMenu" onClick={MobileMenu}>
          <span />
          <span />
          <span />
        </div>
      </header>

    </>


  );
};

export default Navbar;