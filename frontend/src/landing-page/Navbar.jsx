import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goToTradingDashboard = () => {
    closeMenu();
    window.location.href = "https://trading-dashboard-7o92f56tn-namans-projects-b6811f1a.vercel.app/";
  };

  return (
    <header className={style.main}>
      {/* Left Logo */}
      <div className={style.left}>
        <Link to="/" onClick={closeMenu}>
          <img src="/image/logo.svg" alt="logo" />
        </Link>
      </div>

      <button 
        className={`${style.hamburger} ${isOpen ? style.open : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>

     
      <nav className={`${style.right} ${isOpen ? style.active : ''}`}>
        <ul>
          <li>
            <Link to="/Signup" onClick={closeMenu}>Signup</Link>
          </li>
          <li>
            <Link to="/About" onClick={closeMenu}>About</Link>
          </li>
          <li>
          
            <Link to="/Products" onClick={closeMenu}>Products</Link> 
          </li>
          <li>
            <Link to="/Pricing" onClick={closeMenu}>Pricing</Link>
          </li>
          <li>
            <Link to="/Support" onClick={closeMenu}>Support</Link>
          </li>
          <li>
            <Link to="/CreateAccount" onClick={closeMenu}>
              <button className={style.signupBtn}>Signup</button>
            </Link>
          </li>
          <li
            onClick={goToTradingDashboard}
            className={style.kiteItem}
          >
            <img
              src="https://kite.zerodha.com/static/images/kite-logo.svg"
              alt="kite logo"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;