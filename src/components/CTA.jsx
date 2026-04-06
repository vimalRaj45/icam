import { motion } from 'framer-motion';

export default function CTA() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="section cta-section">
      <div className="section-container">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated corner accents */}
          <motion.div
            style={{
              position: 'absolute', top: 0, left: 0, width: '60px', height: '60px',
              borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)',
              borderRadius: '24px 0 0 0', opacity: 0.4,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            style={{
              position: 'absolute', bottom: 0, right: 0, width: '60px', height: '60px',
              borderBottom: '2px solid var(--accent-2)', borderRight: '2px solid var(--accent-2)',
              borderRadius: '0 0 24px 0', opacity: 0.4,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Secure Your Property?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Contact us today for a free security consultation and quote. Protect what matters most with I-CAM Solution Services.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="tel:9894510065" className="btn-glow primary" style={{ textDecoration: 'none' }}>
              <i className="pi pi-phone" /> Emergency: 98945 10065
            </a>
            <button className="btn-glow outline" onClick={() => scrollTo('#contact')}>
              <i className="pi pi-envelope" /> Get Free Quote
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
