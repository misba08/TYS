import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo from './Images/logo.png';
import profile from './Images/profile.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
    closeMenu();
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchOpen(false);
      // Perform your search actions here
      console.log('Performing search:', e.target.value);
    }
  };

  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <NavLink to="/" onClick={() => handleNavLinkClick('/')} className={activeLink === '/' ? 'active-link' : ''}>
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={`navbar-items ${menuOpen ? 'active' : ''}`}>
        <NavLink exact to="/" onClick={() => handleNavLinkClick('/')} className={activeLink === '/' ? 'active-link' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => handleNavLinkClick('/about')} className={activeLink === '/about' ? 'active-link' : ''}>
          About
        </NavLink>
        <NavLink to="/services" onClick={() => handleNavLinkClick('/services')} className={activeLink === '/services' ? 'active-link' : ''}>
          Services
        </NavLink>
        <NavLink to="/contact" onClick={() => handleNavLinkClick('/contact')} className={activeLink === '/contact' ? 'active-link' : ''}>
          Contact
        </NavLink>
      </div>
      <div className="navbar-search">
        <i className="material-icons" onClick={toggleSearch}>search</i>
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onKeyDown={handleSearchKeyDown}
          />
        )}
        <div className="navbar-profile" style={{ marginLeft: '10px' }}>
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar3' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
