import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const locations = [
  {
    name: 'Rasipuram',
    desc: 'Our headquarters and primary service area. Complete security and networking solutions for residential and commercial properties.',
    services: 'CCTV Installation, Network Setup, Intercom Systems, Maintenance',
  },
  {
    name: 'Salem',
    desc: 'Expanding quality services to Salem district. Specializing in office network setups, school campus security, and commercial CCTV.',
    services: 'Office LAN Networks, School Security, Commercial CCTV, WiFi Setup',
  },
  {
    name: 'Namakkal',
    desc: 'Reliable and cost-effective technology solutions across Namakkal district. Expertise in residential security and small office networking.',
    services: 'Home CCTV, Small Office LAN, WiFi Setup, Surveillance Maintenance',
  },
  {
    name: 'Viluppuram',
    desc: 'Advanced security solutions for Viluppuram district. Agricultural, industrial, and residential security with remote monitoring.',
    services: 'Industrial CCTV, Farm Security, Residential Systems, Remote Monitoring',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Locations() {
  const handleContact = (name) => {
    toast.success(`${name} Office — Call Soundharraj at 98945 10065`, {
      duration: 3500,
      icon: '📍',
    });
  };

  return (
    <section id="locations" className="section">
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
            Coverage
            <span className="line" />
          </div>
          <h2 className="section-title">
            Our Service <span className="gradient-text">Areas</span>
          </h2>
          <p className="section-subtitle">
            Serving across multiple districts with quality security solutions
          </p>
        </motion.div>

        <motion.div
          className="locations-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              className="glass-card location-card"
              variants={cardAnim}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="location-icon"
                animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              >
                <i className="pi pi-map-marker" />
              </motion.div>
              <h4>{loc.name}</h4>
              <p>{loc.desc}</p>
              <div className="location-services">
                <strong>Services Available:</strong>
                {loc.services}
              </div>
              <button className="btn-glow primary" onClick={() => handleContact(loc.name)} style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
                <i className="pi pi-phone" /> Contact {loc.name}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
