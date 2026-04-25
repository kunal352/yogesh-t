import React, { useState, useEffect } from 'react';

function Yogesh() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { 
      id: 1, 
      name: 'E-Commerce Platform', 
      tech: 'React + Node.js', 
      desc: 'Full-featured online store with payment integration',
      color: 'from-pink-500 to-rose-500',
      icon: '🛒'
    },
    { 
      id: 2, 
      name: 'Weather Dashboard', 
      tech: 'API Integration', 
      desc: 'Real-time weather updates with beautiful UI',
      color: 'from-blue-500 to-cyan-500',
      icon: '🌤️'
    },
    { 
      id: 3, 
      name: 'Task Manager', 
      tech: 'MERN Stack', 
      desc: 'Productivity app with drag-and-drop',
      color: 'from-green-500 to-emerald-500',
      icon: '✅'
    },
    { 
      id: 4, 
      name: 'Portfolio Website', 
      tech: 'Tailwind CSS', 
      desc: 'Responsive design showcase with animations',
      color: 'from-purple-500 to-indigo-500',
      icon: '💼'
    },
  ];

  const skills = [
    { icon: '⚛️', name: 'React.js', level: '90%', color: 'bg-cyan-500' },
    { icon: '🎨', name: 'Tailwind CSS', level: '95%', color: 'bg-blue-500' },
    { icon: '📜', name: 'JavaScript', level: '85%', color: 'bg-yellow-500' },
    { icon: '💻', name: 'Web Development', level: '88%', color: 'bg-green-500' },
    { icon: '🎯', name: 'UI/UX Design', level: '80%', color: 'bg-purple-500' },
    { icon: '📱', name: 'Responsive Design', level: '92%', color: 'bg-pink-500' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center group"
            >
              <span className="text-2xl sm:text-3xl mr-2 transform group-hover:rotate-12 transition duration-300">🚀</span>
              <span className={`text-xl sm:text-2xl font-bold transition duration-300 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>DevBhai</span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 lg:space-x-4">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                    activeSection === section
                      ? 'bg-blue-600 text-white'
                      : scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              Hire Me
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex flex-col space-y-3">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-left px-4 py-2 rounded-lg font-medium transition duration-300 capitalize ${
                      activeSection === section
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {section}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition duration-300"
                >
                  Hire Me
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section id="home" className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-20">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-bounce">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Hi, I'm <span className="text-yellow-300 inline-block hover:scale-110 transition duration-300">Yogesh</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 max-w-3xl mx-auto font-light">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white/90">
            I craft beautiful, responsive websites with React & Tailwind CSS that deliver exceptional user experiences
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition duration-300 group"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={() => alert('📄 CV Downloaded!')}
              className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-800 transform hover:scale-105 transition duration-300"
            >
              Download CV
            </button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <button className="text-white hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl">
              💼
            </button>
            <button className="text-white hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl">
              📁
            </button>
            <button className="text-white hover:text-yellow-300 transform hover:scale-110 transition duration-300 text-2xl">
              🐦
            </button>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Design */}
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Know Me Better</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 h-80 sm:h-96 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition duration-500">
                  <span className="text-8xl animate-bounce">👨‍💻</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Web Developer</span>
              </h3>
              
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                With 3+ years of experience in creating modern, responsive websites. 
                I specialize in React.js and Tailwind CSS to build fast, efficient, 
                and beautiful web applications that users love.
              </p>
              
              <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                My goal is to create digital experiences that are not just functional, 
                but also engaging and memorable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                  <p className="font-bold text-blue-600 text-3xl mb-2">50+</p>
                  <p className="text-gray-700 font-medium">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                  <p className="font-bold text-purple-600 text-3xl mb-2">100%</p>
                  <p className="text-gray-700 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}
      <section id="skills" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">My Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Skills & Technologies</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer group"
                onClick={() => alert(`💡 ${skill.name}: ${skill.level} proficiency`)}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition duration-300">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.level}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{width: skill.level}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Hover Effects */}
      <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-gray-800">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-2"
                onClick={() => alert(`🚀 Opening ${project.name}...`)}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <span className="text-6xl relative z-10 transform group-hover:scale-110 transition duration-300">{project.icon}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition duration-300">
                    {project.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">{project.tech}</p>
                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                  
                  <button 
                    className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition duration-300 group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`📖 More details about ${project.name}`);
                    }}
                  >
                    View Details
                    <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Modern Form */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Let's Work Together</h2>
            <p className="text-gray-400 mt-4 text-lg">Have a project in mind? Let's create something amazing!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..." 
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center justify-center group"
              >
                Send Message
                <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">📨</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start group cursor-pointer">
                <span className="text-3xl mr-2 transform group-hover:rotate-12 transition duration-300">🚀</span>
                <span className="text-2xl font-bold">DevBhai</span>
              </div>
              <p className="text-gray-400 mt-2">Building digital experiences</p>
              <p className="text-gray-500 text-sm mt-1">© 2024 All rights reserved</p>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://github.com', '_blank')}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition duration-300"
                title="GitHub"
              >
                📁
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition duration-300"
                title="LinkedIn"
              >
                💼
              </button>
              <button 
                onClick={() => window.open('https://twitter.com', '_blank')}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition duration-300"
                title="Twitter"
              >
                🐦
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-2xl transform hover:scale-110 transition duration-300"
                title="Email"
              >
                ✉️
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Yogesh;