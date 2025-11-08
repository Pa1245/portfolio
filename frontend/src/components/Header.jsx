import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Parag Amrutkar
          </Link>

          <nav className="desktop-nav">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/terminal" className="btn btn-secondary">
              Terminal Mode
            </Link>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'nav-link active' : 'nav-link'}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/terminal"
              className="btn btn-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terminal Mode
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
