import React, { useState, useEffect, useCallback } from 'react';
import "../css/Navbar.css"
import { Link } from 'react-router';

const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // const toggleMenu = useCallback(() => {
    //     setIsMenuOpen(prev => !prev);
    // }, []);

    // const closeMenu = useCallback(() => {
    //     setIsMenuOpen(false);
    // }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: 'shop' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    // const getSpanStyle = (index) => {
    //     if (!isMenuOpen) {
    //         return {};
    //     }
    //     switch (index) {
    //         case 0:
    //             return { transform: 'rotate(45deg) translateY(9px)' };
    //         case 1:
    //             return { opacity: '0' };
    //         case 2:
    //             return { transform: 'rotate(-45deg) translateY(-9px)' };
    //         default:
    //             return {};
    //     }
    // };

    return (
        <header id="header" >
            <img
                src="/oglogo.png"
                alt="Logo"
            />

            <ul id="navMenu" >
                {navItems.map((item,index) => (
                    <Link  to={item.href} key={index} >
                        <li>{item.name}</li>
                    </Link>
                ))}
            </ul>

            <div className="profile">
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
               <Link to="/cart">
                <div className="basket">
                    <i className="fa fa-shopping-basket"></i>
                    <span className="badge">3</span>
                </div>
                </Link>
            </div>

            <div className="mobile-menu" id="mobileMenu" >
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
        </header>
    );
};

export default Navbar;