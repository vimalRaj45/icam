import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiVideo, FiTool, FiWifi, FiMic, FiSmartphone, FiShield } from 'react-icons/fi';

const services = [
  {
    icon: FiVideo,
    color: 'cyan',
    title: 'CCTV Sales & Installation',
    desc: 'Professional installation of high-quality CCTV systems for residential and commercial properties.',
    features: ['Indoor & Outdoor Cameras', 'Full HD & Night Vision', 'Wide-Angle & PTZ Cameras', 'Hidden Camera Solutions'],
  },
  {
    icon: FiTool,
    color: 'purple',
    title: 'CCTV Maintenance & Repair',
    desc: 'Regular maintenance and prompt repair services to ensure your security system operates flawlessly.',
    features: ['System Diagnostics', 'Camera Calibration', 'Hardware Replacement', 'Preventive Maintenance'],
  },
  {
    icon: FiWifi,
    color: 'gold',
    title: 'Office & Campus Network',
    desc: 'Complete LAN networking solutions for offices, schools, and colleges with campus-wide WiFi coverage.',
    features: ['Office LAN Network Setup', 'School/College Campus WiFi', 'Structured Cabling', 'Network Security Setup'],
  },
  {
    icon: FiMic,
    color: 'cyan',
    title: 'Intercom Systems',
    desc: 'Advanced intercom and public address systems for offices, schools, and residential complexes.',
    features: ['Video Door Phones', 'Campus Intercom Systems', 'Public Address Systems', 'Emergency Alert Systems'],
  },
  {
    icon: FiSmartphone,
    color: 'purple',
    title: 'Remote Viewing & Monitoring',
    desc: 'Access your CCTV footage from anywhere using your smartphone, tablet, or computer.',
    features: ['Mobile App Integration', '24/7 Remote Access', 'Cloud Storage Options', 'Real-Time Alerts'],
  },
  {
    icon: FiShield,
    color: 'gold',
    title: 'Security Consulting',
    desc: 'Professional security assessment and consulting services to design optimal security solutions.',
    features: ['Security Risk Assessment', 'System Design & Planning', 'Vendor Selection', 'Compliance Consultation'],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  const handleLearnMore = (title) => {
    toast.success(`${title} — Our expert Soundharraj will guide you!`, {
      duration: 3500,
      style: {
        background: 'rgba(15, 23, 42, 0.95)',
        color: '#e2e8f0',
        border: '1px solid rgba(0, 212, 255, 0.25)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(0,212,255,0.1)',
      },
    });
  };

  return (
    <section id="services" className="section">
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
            What We Offer
            <span className="line" />
          </div>
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive security and networking solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="glass-card service-card"
                variants={cardAnim}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`service-icon-wrap ${service.color}`}>
                  <motion.div
                    className="icon-inner"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((f, j) => (
                    <li key={j}>
                      <i className="pi pi-check-circle" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="learn-more-btn" onClick={() => handleLearnMore(service.title)}>
                  Learn More <i className="pi pi-arrow-right" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
