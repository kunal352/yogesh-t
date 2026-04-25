import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    image: '/assets/images/ecommerce.png'
  },
  {
    title: 'Fitness Tracking App',
    category: 'UI/UX Design',
    image: '/assets/images/fitness.png'
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Design',
    image: '/assets/images/realestate.png'
  },
  {
    title: 'SaaS Dashboard',
    category: 'Full Stack',
    image: '/assets/images/saas.png'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <span className="badge">Portfolio</span>
            <h2>Our Latest <span className="gradient-text">Masterpieces</span></h2>
          </div>
          <a href="#contact" className="btn-outline">View All Projects</a>
        </div>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-item glass">
              <div className="project-image">
                <img src={p.image} alt={p.title} />
                <div className="project-overlay">
                  <a href="#contact" className="btn-primary">View Project</a>
                </div>
              </div>
              <div className="project-info">
                <span className="category">{p.category}</span>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .portfolio-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 60px;
        }
        .portfolio-header h2 {
          font-size: 42px;
          margin-top: 10px;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
        }
        .portfolio-item {
          padding: 20px;
          overflow: hidden;
        }
        .project-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16/10;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }
        .portfolio-item:hover .project-overlay {
          opacity: 1;
        }
        .portfolio-item:hover img {
          transform: scale(1.1);
        }
        .project-info {
          padding: 20px 0 10px;
        }
        .category {
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .project-info h3 {
          font-size: 24px;
          margin-top: 5px;
        }
        @media (max-width: 600px) {
          .portfolio-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
