import React, { useState, useEffect, useCallback } from 'react';
import "../Css/Navbar.css"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Product', href: '#product' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const getSpanStyle = (index) => {
        if (!isMenuOpen) {
            return {};
        }
        switch (index) {
            case 0:
                return { transform: 'rotate(45deg) translateY(9px)' };
            case 1:
                return { opacity: '0' };
            case 2:
                return { transform: 'rotate(-45deg) translateY(-9px)' };
            default:
                return {};
        }
    };

    return (
        <header id="header" className={isScrolled ? 'scrolled' : ''}>
            <img
                src="https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n"
                alt="Logo"
            />

            <ul id="navMenu" className={isMenuOpen ? 'active' : ''}>
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} onClick={closeMenu}>
                        <li>{item.name}</li>
                    </a>
                ))}
            </ul>

            <div className="profile">
                <i className="fa fa-search"></i>
                <i className="fa fa-user"></i>
                <div className="basket">
                    <i className="fa fa-shopping-basket"></i>
                    <span className="badge">3</span>
                </div>
            </div>

            <div className="mobile-menu" id="mobileMenu" onClick={toggleMenu}>
                <span style={getSpanStyle(0)}></span>
                <span style={getSpanStyle(1)}></span>
                <span style={getSpanStyle(2)}></span>
            </div>
        </header>
    );
};

export default Navbar;