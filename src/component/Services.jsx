import React from 'react';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom, responsive, and blazing fast websites built with modern technologies.',
    icon: '💻',
    color: 'var(--primary)'
  },
  {
    title: 'UI/UX Design',
    desc: 'Beautiful and intuitive user interfaces designed to convert and delight users.',
    icon: '🎨',
    color: 'var(--secondary)'
  },
  {
    title: 'SEO Mastery',
    desc: 'Rank higher on Google and get more organic traffic to your business.',
    icon: '🚀',
    color: 'var(--accent)'
  },
  {
    title: 'E-Commerce',
    desc: 'Scalable online stores with seamless payment integration and user experience.',
    icon: '🛒',
    color: '#f59e0b'
  },
  {
    title: 'Brand Identity',
    desc: 'Unique logos and brand guidelines that make your business stand out.',
    icon: '💎',
    color: '#10b981'
  },
  {
    title: 'Maintenance',
    desc: '24/7 support and updates to keep your website running smoothly.',
    icon: '🛠️',
    color: '#ef4444'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Do</span>
          <h2>Premium Services for <br /> <span className="gradient-text">Modern Businesses</span></h2>
          <p>We provide end-to-end digital solutions to help your business thrive in the modern web era.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass">
              <div className="service-icon" style={{ backgroundColor: `${s.color}20`, color: s.color }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services-section {
          background-color: var(--bg-dark);
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-header h2 {
          font-size: 42px;
          margin-bottom: 20px;
        }
        .section-header p {
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .service-card {
          padding: 40px;
          transition: var(--transition);
        }
        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
        }
        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
        }
        .service-card h3 {
          font-size: 22px;
          margin-bottom: 16px;
        }
        .service-card p {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .learn-more {
          font-weight: 600;
          font-size: 14px;
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Services;
