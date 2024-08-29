import React from 'react';
import './Navbar.css'; 
import logo from '../assets/logo.png'; 
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-right">
      <Link to="/" className='button1' >Home</Link>
        <Link to="/games" className='button1' >Games</Link>
        <Link to="/about" className='button1' >About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
