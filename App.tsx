
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="services" className="py-24 bg-neutral-50">
          <Services />
        </section>

        <section id="about" className="py-24 bg-white">
          <About />
        </section>

        <section id="gallery" className="py-24 bg-neutral-50 border-y border-neutral-100">
          <Gallery />
        </section>

        <section id="quotes" className="py-24 bg-white">
          <Quotes />
        </section>

        <section id="contact" className="py-24 bg-neutral-50 border-t border-neutral-100">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
