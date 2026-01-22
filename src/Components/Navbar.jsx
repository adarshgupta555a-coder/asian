import React, { useState, useEffect, useCallback } from 'react';
import "../css/Navbar.css"
import { Link } from 'react-router';

const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    const MobileMenu = () => {
        setMobile(prev => !prev);
    }

    const removeMobile = () =>{
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
    <ul id="navMenu" className={mobile?"active":""}>
      {navItems.map((item,index)=>(
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
          <span className="badge">3</span>
        </div>
      </Link>
    </div>
    <div  className={`mobile-menu ${mobile?"active":""}`} id="mobileMenu" onClick={MobileMenu}>
      <span />
      <span />
      <span />
    </div>
  </header>
 
</>

  
    );
};

export default Navbar;