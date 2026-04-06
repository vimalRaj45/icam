import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Salem',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
    text: '"I-CAM installed CCTV cameras and office network in my Salem business. Their service was professional, and everything works perfectly. Highly recommended!"',
  },
  {
    name: 'Priya Sharma',
    role: 'School Principal, Rasipuram',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 4.5,
    text: '"Excellent service! The team installed campus CCTV, intercom system, and WiFi across our school. Soundharraj personally supervised the project. Highly satisfied!"',
  },
  {
    name: 'Arun Patel',
    role: 'Factory Owner, Viluppuram',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    stars: 5,
    text: '"We had I-CAM setup security system in our Viluppuram factory. They were professional, punctual, and the installation was done neatly. Their after-sales support is excellent."',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
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
            Reviews
            <span className="line" />
          </div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Trusted by homeowners, businesses, and institutions across our service areas
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card testimonial-card"
              variants={cardAnim}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={t.avatar}
                alt={t.name}
                className="testimonial-avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h5>{t.name}</h5>
              <div className="testimonial-role">{t.role}</div>
              <div className="testimonial-stars">
                {Array.from({ length: Math.floor(t.stars) }).map((_, j) => (
                  <i key={j} className="pi pi-star-fill" style={{ marginRight: '2px' }} />
                ))}
                {t.stars % 1 !== 0 && (
                  <i className="pi pi-star-fill" style={{ opacity: 0.5, marginRight: '2px' }} />
                )}
              </div>
              <blockquote>{t.text}</blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
