import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div className="nav-brand-icon" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
              <i className="pi pi-video" />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
              I-<span className="gradient-text">CAM</span>
            </span>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Providing premium security and networking solutions across Rasipuram, Salem, Namakkal, and Viluppuram districts. Your safety is our priority.
          </p>
          <div className="footer-social">
            {[
              { icon: 'pi-facebook', href: '#' },
              { icon: 'pi-whatsapp', href: 'https://wa.me/919894510065' },
              { icon: 'pi-instagram', href: '#' },
              { icon: 'pi-twitter', href: '#' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <i className={`pi ${s.icon}`} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {['Home', 'About', 'Services', 'Locations', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(`#${item.toLowerCase()}`);
                  }}
                >
                  <i className="pi pi-angle-right" style={{ fontSize: '0.7rem' }} /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul className="footer-links">
            {[
              'CCTV Sales & Installation',
              'Office LAN Networks',
              'Campus WiFi Setup',
              'Intercom Systems',
              'Remote Monitoring',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#services');
                  }}
                >
                  <i className="pi pi-angle-right" style={{ fontSize: '0.7rem' }} /> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <ul className="footer-links">
            <li><a href="tel:9894510065"><i className="pi pi-phone" /> +91 98945 10065</a></li>
            <li><a href="mailto:soundharraj9894@gmail.com"><i className="pi pi-envelope" /> soundharraj9894@gmail.com</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}><i className="pi pi-user" /> Owner: Soundharraj</a></li>
            <li><a href="#locations" onClick={(e) => { e.preventDefault(); scrollTo('#locations'); }}><i className="pi pi-map-marker" /> Rasipuram, Salem, Namakkal, Viluppuram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 I-CAM Solution Services. All Rights Reserved.</p>
        <p style={{ marginTop: '0.3rem' }}>
          Serving Rasipuram, Salem, Namakkal and Viluppuram districts &bull; Developed by Vimalraj S
        </p>
      </div>
    </footer>
  );
}
