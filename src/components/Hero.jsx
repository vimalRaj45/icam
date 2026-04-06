import { motion } from 'framer-motion';
import { FiWifi, FiShield, FiMonitor, FiCloud, FiCpu, FiRadio, FiLock, FiZap } from 'react-icons/fi';

const floatingIcons = [
  { Icon: FiWifi, style: { top: '15%', left: '8%' } },
  { Icon: FiShield, style: { top: '25%', right: '10%' } },
  { Icon: FiMonitor, style: { bottom: '30%', left: '5%' } },
  { Icon: FiCloud, style: { bottom: '20%', right: '8%' } },
  { Icon: FiCpu, style: { top: '50%', left: '15%' } },
  { Icon: FiRadio, style: { top: '40%', right: '15%' } },
  { Icon: FiLock, style: { bottom: '40%', left: '20%' } },
  { Icon: FiZap, style: { top: '10%', left: '40%' } },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '4', label: 'Service Locations' },
  { number: '24/7', label: 'Support Available' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="grid-overlay" />

      {/* Floating animated icons */}
      <div className="floating-icons">
        {floatingIcons.map(({ Icon, style }, i) => (
          <motion.div
            key={i}
            className="floating-icon"
            style={style}
            animate={{
              y: [0, -25, -10, -30, 0],
              rotate: [0, 5, -3, 4, 0],
              opacity: [0.12, 0.22, 0.15, 0.25, 0.12],
            }}
            transition={{
              duration: 8 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.6,
            }}
          >
            <Icon size={32 + i * 3} />
          </motion.div>
        ))}
      </div>

      {/* Animated orbs */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          top: '10%',
          right: '-5%',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          bottom: '5%',
          left: '-3%',
          pointerEvents: 'none',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="dot" />
          Trusted Security & Networking Partner
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Smart Networking &<br />
          <span className="gradient-text">Surveillance Solutions</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Professional CCTV installation, campus WiFi, office networking, and 24/7 security monitoring across Rasipuram, Salem, Namakkal & Viluppuram.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="btn-glow primary" onClick={() => scrollTo('#services')}>
            <i className="pi pi-arrow-right" /> Get Started
          </button>
          <button className="btn-glow outline" onClick={() => scrollTo('#contact')}>
            <i className="pi pi-envelope" /> Contact Us
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
