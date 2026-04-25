import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Yoga Logo" className="logo-img" />
          <span className="logo-text">Yoga<span className="dot">.</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn-primary">Start Project</a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          padding: 16px 0;
          border-bottom: 1px solid var(--glass-border);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-img {
          height: 40px;
          width: 40px;
          object-fit: contain;
          border-radius: 8px;
        }
        .logo-text {
          font-size: 28px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -1px;
        }
        .dot {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links a {
          font-weight: 500;
          font-size: 15px;
          color: var(--text-muted);
        }
        .nav-links a:hover {
          color: var(--text-main);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
