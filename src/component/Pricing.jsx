import React from 'react';

const plans = [
  {
    name: 'Beginner',
    price: '₹1,500',
    range: '₹1,500 - ₹5,000',
    features: ['Simple Website', '3–5 Pages', 'Perfect for Reviews', 'Basic SEO', 'Fast Delivery'],
    recommended: false,
    note: 'Ideal for starting on Fiverr'
  },
  {
    name: 'Intermediate',
    price: '₹5,000',
    range: '₹5,000 - ₹15,000',
    features: ['Responsive Design', 'Interactive Forms', 'Basic Backend', 'Custom UI/UX', 'Mobile Optimized'],
    recommended: true,
    note: 'Most Popular Choice'
  },
  {
    name: 'Advanced',
    price: '₹15,000',
    range: '₹15,000 - ₹50,000+',
    features: ['Full Dynamic Site', 'Login & Auth', 'Custom Dashboard', 'API Integration', 'Enterprise Quality'],
    recommended: false,
    note: 'Pro Level Solution'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Flexible Pricing</span>
          <h2>Plans That Scale With <br /> <span className="gradient-text">Your Business</span></h2>
          <p>Choose the perfect plan for your needs. No hidden fees, just pure quality.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card glass ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-note">{plan.note}</p>
              <div className="price">
                <span className="amount">{plan.range}</span>
              </div>
              <ul className="features">
                {plan.features.map((f, j) => (
                  <li key={j}><span>✓</span> {f}</li>
                ))}
              </ul>
              <a href={`#contact`} className={`btn-${plan.recommended ? 'primary' : 'outline'}`}>Get Started</a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pricing-section {
          background-color: var(--bg-darker);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }
        .pricing-card {
          padding: 50px 40px;
          text-align: center;
          position: relative;
          transition: var(--transition);
        }
        .pricing-card:hover {
          transform: translateY(-10px);
        }
        .pricing-card.recommended {
          border: 1px solid var(--primary);
          box-shadow: 0 0 40px var(--primary-glow);
        }
        .popular-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--primary);
          color: white;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .pricing-card h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: var(--text-main);
        }
        .plan-note {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: 500;
        }
        .price {
          margin-bottom: 30px;
        }
        .amount {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-main);
        }
        .period {
          color: var(--text-muted);
          font-size: 16px;
        }
        .features {
          text-align: left;
          margin-bottom: 40px;
        }
        .features li {
          margin-bottom: 12px;
          font-size: 15px;
          color: var(--text-muted);
          display: flex;
          gap: 10px;
        }
        .features li span {
          color: var(--primary);
          font-weight: 700;
        }
        .pricing-card button {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
