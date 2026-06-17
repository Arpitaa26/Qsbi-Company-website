import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/assets/img/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Nav Menu */}
        <nav id="navmenu" className={`navmenu ${menuOpen ? 'show-menu' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/career" onClick={closeMenu}>Career</Link></li>
          </ul>
          <i
          className={`mobile-nav-toggle d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`}
          onClick={toggleMenu}
          style={{ cursor: 'pointer', fontSize: '24px' }}
        />
        </nav>

        {/* Toggle Icon: changes from bi-list (hamburger) to bi-x (close) */}
        

        <a className="btn-getstarted" href="index.html#about">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
