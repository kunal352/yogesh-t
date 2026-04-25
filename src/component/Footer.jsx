import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src="/assets/images/logo.png" alt="Yoga Logo" className="logo-img" />
              <span className="logo-text">Yoga<span className="dot">.</span></span>
            </div>
            <p>Empowering businesses through premium digital experiences. Let's build the future together.</p>
            <div className="social-links">
              <a href="#">Fb</a>
              <a href="#">Tw</a>
              <a href="#">Ig</a>
              <a href="#">Li</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Company</h4>
              <a href="#services">Services</a>
              <a href="#portfolio">Our Work</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Services</h4>
              <a href="#services">Web Design</a>
              <a href="#services">Development</a>
              <a href="#services">SEO</a>
              <a href="#services">E-commerce</a>
            </div>
            <div className="link-group">
              <h4>Contact Info</h4>
              <a href="mailto:yogeshthorat612@gmail.com">yogeshthorat612@gmail.com</a>
              <a href="tel:+919405013152">+91 9405013152</a>
              <a href="#contact">Vadgaonpan, Maharashtra</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Yoga Digital Agency. All rights reserved.</p>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--bg-darker);
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        .footer-brand p {
          color: var(--text-muted);
          margin: 20px 0 30px;
          max-width: 400px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-img {
          height: 32px;
          width: 32px;
          object-fit: contain;
          border-radius: 6px;
        }
        .logo-text {
          font-size: 24px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -1px;
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: var(--text-muted);
        }
        .social-links a:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .footer-links {
          display: flex;
          justify-content: space-between;
        }
        .link-group h4 {
          font-size: 18px;
          margin-bottom: 25px;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .link-group a {
          color: var(--text-muted);
          font-size: 15px;
        }
        .link-group a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 14px;
        }
        .legal {
          display: flex;
          gap: 30px;
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
          .legal { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
