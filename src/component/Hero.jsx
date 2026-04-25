import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <span className="badge">Digital Agency</span>
          <h1>Build Your Brand's <br /> <span className="gradient-text">Digital Legacy</span></h1>
          <p>We transform your ideas into premium, high-performance websites that drive growth and captivate your audience.</p>
          <div className="hero-btns">
            <a href="#portfolio" className="btn-primary">View Our Work</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
            <div className="stat-line"></div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-line"></div>
            <div className="stat-item">
              <h3>4.9</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card glass">
            <div className="card-icon">🚀</div>
            <div className="card-info">
              <h4>Fast Delivery</h4>
              <p>Within 7 days</p>
            </div>
          </div>
          <div className="floating-card glass card-2">
            <div className="card-icon">💎</div>
            <div className="card-info">
              <h4>Premium Quality</h4>
              <p>Pixel perfect</p>
            </div>
          </div>
          <div className="hero-main-img">
            <img src="/assets/images/hero.png" alt="Digital Agency" className="hero-img" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 150px;
        }
        .hero-glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
          filter: blur(80px);
          z-index: -1;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .badge {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(99, 102, 241, 0.2);
          display: inline-block;
          margin-bottom: 24px;
        }
        h1 {
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 500px;
        }
        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .stat-item h3 {
          font-size: 24px;
          margin-bottom: 4px;
        }
        .stat-item p {
          font-size: 14px;
          margin-bottom: 0;
        }
        .stat-line {
          width: 1px;
          height: 40px;
          background: var(--glass-border);
        }
        .hero-visual {
          position: relative;
        }
        .image-placeholder, .hero-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 30px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .floating-card {
          position: absolute;
          padding: 20px;
          display: flex;
          gap: 15px;
          align-items: center;
          z-index: 10;
          animation: float 4s ease-in-out infinite;
        }
        .card-2 {
          bottom: 20px;
          right: -20px;
          animation-delay: 2s;
        }
        .card-icon {
          font-size: 24px;
        }
        .card-info h4 { font-size: 16px; margin-bottom: 2px; }
        .card-info p { font-size: 12px; margin: 0; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 968px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-btns { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
