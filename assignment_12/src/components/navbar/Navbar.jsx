import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="brand-container">
      <div className='brand-underline'></div>
          <p className="brand">Rentiz</p>
          
     </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><NavLink>About Us</NavLink></li>
          <li><NavLink to="/buying">Buying</NavLink></li>
          <li><NavLink to="/renting">Renting</NavLink></li>
          <li><NavLink to="/selling">Selling</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li className="signup"><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#about">About Us</a>
            <a href="#buying">Buying</a>
            <a href="#renting">Renting</a>
            <a href="#selling">Selling</a>
            <a href="#contact">Contact Us</a>
            <a href="#login">Login</a>
            <a href="#signup" className="signup-mobile">Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;