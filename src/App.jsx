import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;