import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message via API...");
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await axios.post(`${apiUrl}/api/contact`, data);

      if (response.data.success) {
        setResult("✅ Success! Your message was sent via our API.");
        event.target.reset();
      } else {
        setResult("❌ Error: " + response.data.message);
      }
    } catch (error) {
      console.error("API Error:", error);
      // Fallback to WhatsApp if API fails
      setResult("❌ API Error. Redirecting to WhatsApp...");
      
      const message = `*API Fallback Message*%0A%0A` +
                      `*Name:* ${data.name}%0A` +
                      `*Email:* ${data.email}%0A` +
                      `*Service:* ${data.service}%0A` +
                      `*Message:* ${data.message}`;

      const whatsappUrl = `https://wa.me/919405013152?text=${message}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 2000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid glass">
          <div className="contact-info">
            <h2>Let's Create Something <span className="gradient-text">Extraordinary</span></h2>
            <p>Ready to start your next digital project? Reach out and let's make it happen.</p>
            <div className="info-items">
              <div className="info-item">
                <div className="icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Vadgaonpan, Maharashtra, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>yogeshthorat612@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9405013152</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select name="service" required>
                <option value="">Select Service</option>
                <option value="web">Web Development</option>
                <option value="design">UI/UX Design</option>
                <option value="seo">SEO Optimization</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Tell us about your project" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
            {result && <p className="form-status">{result}</p>}
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          padding-bottom: 150px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          overflow: hidden;
          padding: 0;
        }
        .contact-info {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          padding: 60px;
          color: white;
        }
        .contact-info h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: white;
        }
        .contact-info .gradient-text {
          -webkit-text-fill-color: #fff;
          opacity: 0.9;
        }
        .contact-info p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .info-item .icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .info-item h4 { font-size: 18px; margin-bottom: 5px; }
        .info-item p { margin: 0; font-size: 14px; }
        
        .contact-form {
          padding: 60px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 15px 20px;
          border-radius: 12px;
          color: var(--text-main);
          font-family: inherit;
          transition: var(--transition);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.1);
        }
        .or-divider {
          text-align: center;
          color: var(--text-muted);
          font-size: 12px;
          margin: 10px 0;
          position: relative;
        }
        .or-divider::before, .or-divider::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 40%;
          height: 1px;
          background: var(--glass-border);
        }
        .or-divider::before { left: 0; }
        .or-divider::after { right: 0; }
        
        .btn-whatsapp {
          background: #25d366;
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          text-align: center;
          font-weight: 600;
          display: block;
          transition: var(--transition);
        }
        .btn-whatsapp:hover {
          background: #128c7e;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }
        .form-status {
          font-size: 14px;
          color: var(--primary);
          text-align: center;
          margin-top: 10px;
          font-weight: 500;
        }
        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
