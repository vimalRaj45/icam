import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function About() {
  const handleContactOwner = () => {
    toast.success('Connecting you to Soundharraj — Call 98945 10065', {
      duration: 4000,
      icon: '📞',
    });
  };

  return (
    <section id="about" className="section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">
            <span className="line" />
            Who We Are
            <span className="line" />
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">I-CAM Solutions</span>
          </h2>
          <p className="section-subtitle">
            Trusted security and networking partner across Tamil Nadu
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Your Safety Is Our Priority</h3>
            <p>
              We are a trusted security and networking solutions provider serving Rasipuram, Salem, Namakkal, and Viluppuram districts with over 10 years of industry experience.
            </p>
            <p>
              Our team of certified technicians provides comprehensive CCTV, networking, and security solutions for residential, commercial, and institutional clients. We deliver peace of mind through advanced security technology, professional installation, and exceptional customer service.
            </p>

            <motion.div
              className="glass-card founder-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginTop: '2rem' }}
            >
              <img
                src="https://i.ibb.co/LDfB1pvj/Rioimg.jpg"
                alt="Soundharraj - Founder"
                className="founder-img"
              />
              <div className="founder-name">Soundharraj</div>
              <div className="founder-role">Founder & CEO</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                With over 10 years of experience in security systems and networking, leading our team with expertise and dedication.
              </p>
              <button className="btn-glow primary" onClick={handleContactOwner} style={{ padding: '0.6rem 1.5rem', fontSize: '0.88rem' }}>
                <i className="pi pi-user" /> Contact Owner
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card" style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Security Installation"
                style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div className="about-features">
              {[
                { icon: 'pi-verified', title: 'Certified Experts', desc: 'Licensed professionals' },
                { icon: 'pi-shield', title: 'Quality Assurance', desc: 'Premium products with warranty' },
                { icon: 'pi-clock', title: '24/7 Support', desc: 'Round the clock service' },
                { icon: 'pi-map-marker', title: '4 Locations', desc: 'Wide service coverage' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card about-feature-card"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <motion.i
                    className={`pi ${item.icon}`}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  />
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
