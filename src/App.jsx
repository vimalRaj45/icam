import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="app-layout">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.95)',
            color: '#e2e8f0',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: '12px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 212, 255, 0.1)',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.92rem',
          },
          success: {
            iconTheme: {
              primary: '#00d4ff',
              secondary: '#0f2140',
            },
          },
        }}
      />
      
      <div className="animated-bg" />
      
      <Sidebar />
      
      <main className="main-content">
        <Hero />
        <Services />
        <About />
        <Locations />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>

      <WhatsAppFloat />
    </div>
  );
}

export default App;
