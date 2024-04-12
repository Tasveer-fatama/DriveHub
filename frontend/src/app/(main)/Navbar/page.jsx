'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#20232a' : '#f0f0f0';
    document.body.style.color = isDarkMode ? '#fff' : '#333';
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: isDarkMode ? '#20232a' : '#f0f0f0',
    color: isDarkMode ? '#fff' : '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    transition: 'all 0.3s ease',
  };

  const logoStyles = { // Removed styles for logo
    // fontSize: '20px',
    // fontWeight: 'bold',
    // textDecoration: 'none',
    // color: isDarkMode ? '#fff' : '#333',
  };

  const ulStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: isExpanded ? 'column' : 'row', // Adjust for vertical/horizontal layout
  };

  const liStyles = {
    marginRight: '20px',
    marginBottom: isExpanded ? '10px' : '0', // Adjust for vertical spacing
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
  };

  const hoverLinkStyles = {
    color: '#007bff',
  };

  const menuToggleStyles = {
    display: isExpanded ? 'block' : 'none',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const barStyles = {
    display: 'block',
    width: '25px',
    height: '3px',
    backgroundColor: isDarkMode ? '#fff' : '#333',
    marginBottom: '5px',
    transition: 'all 0.3s ease',
  };

  return (
    <nav id="navbar" style={navbarStyles}>
      {/* Removed logo element */}
      <ul style={ulStyles}>
        <li style={liStyles}><a href="#" style={linkStyles}>Home</a></li>  {/* Changed "Services" to "About" */}
        <li style={liStyles}><a href="#" style={linkStyles}>About</a></li>
        <li style={liStyles}><a href="#" style={linkStyles}>Contact</a></li>
        <li style={liStyles}><a href="#" style={linkStyles}>Login </a></li>
        <li style={liStyles}><a href="#" style={linkStyles}>Signup</a></li>
      </ul>
      <button id="menu-toggle" onClick={toggleMenu} style={menuToggleStyles}>
        <span className="bar" style={barStyles}></span>
        <span className="bar" style={barStyles}></span>
        <span className="bar" style={barStyles}></span>
      </button>
      <button id="theme-toggle" onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
