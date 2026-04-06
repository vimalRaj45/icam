import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home', icon: 'pi-home' },
  { label: 'Services', href: '#services', icon: 'pi-cog' },
  { label: 'About Us', href: '#about', icon: 'pi-info-circle' },
  { label: 'Locations', href: '#locations', icon: 'pi-map-marker' },
  { label: 'Reviews', href: '#testimonials', icon: 'pi-star' },
  { label: 'Contact', href: '#contact', icon: 'pi-envelope' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '#home';
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 250) {
          current = '#' + sec.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <i className={`pi ${isOpen ? 'pi-times' : 'pi-bars'}`} />
      </button>

      {/* Overlay for Mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} 
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <nav className={`sidebar ${!isOpen ? 'mobile-closed' : ''}`}>
        <div className="sidebar-header">
          <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleClick('#home'); }}>
            <div className="nav-brand-icon">
              <i className="pi pi-video" />
            </div>
            I-<span className="cam-text">CAM</span>
          </a>
        </div>

        <div className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`sidebar-link ${active === item.href ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.href);
              }}
            >
              <i className={`pi ${item.icon}`} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="sidebar-footer">
          <a href="tel:9894510065" className="sidebar-cta">
            <i className="pi pi-phone" />
            <span>Call for Quote</span>
          </a>
        </div>
      </nav>
    </>
  );
}
