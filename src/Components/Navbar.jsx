import React, { useState, useEffect, useCallback } from 'react';
import "../css/Navbar.css"
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store/AuthSlice';
import supabase from "../Database/supabase";
import { FetchCartThunk } from '../store/cartThunk';

const Navbar = () => {
  const authData = useSelector((state)=>state.Auth.value);
  const cartData = useSelector((state)=>state?.Cart)
  const dispatch = useDispatch()
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (authData === null) {
      getUserData().then((res)=>{
        console.log(res)
          dispatch(AuthAction.getSession(res[0]));
          dispatch(FetchCartThunk(res[0].id))
      })
    }
  }, [])

  const getUserData =async () => {
    
const { data: { user } } = await supabase.auth.getUser()
let { data: profile, error } = await supabase
  .from('profile')
  .select("*")
  .eq('id', user.id)
    console.log(profile)
  if (!error) {
    return profile;
  } else{
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
    { name: 'Product', href: 'shop' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
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
          <i className="fa fa-search" />
          <i className="fa fa-user" />
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="basket">
              <i className="fa fa-shopping-basket" />
              <span className="badge">{cartData?.length||1}</span>
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