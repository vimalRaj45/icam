import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzue0U4P38-XS5Bk7MpYKG_QJB0rZYbNh17jbSgdTs-ivIVja3N4PMx6U4lO9WtzsaO/exec';

const locationOptions = [
  { label: 'Select your location', value: '' },
  { label: 'Rasipuram', value: 'rasipuram' },
  { label: 'Salem', value: 'salem' },
  { label: 'Viluppuram', value: 'viluppuram' },
  { label: 'Namakkal', value: 'namakkal' },
  { label: 'Other Area', value: 'other' },
];

const serviceOptions = [
  { label: 'Select a service', value: '' },
  { label: 'CCTV Installation', value: 'cctv' },
  { label: 'CCTV Maintenance', value: 'maintenance' },
  { label: 'Office LAN Network', value: 'office-network' },
  { label: 'School/College Campus WiFi', value: 'campus-wifi' },
  { label: 'Intercom Systems', value: 'intercom' },
  { label: 'Remote Viewing Setup', value: 'remote' },
  { label: 'Security Consulting', value: 'consulting' },
  { label: 'Other', value: 'other' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location || !form.service || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Sending your enquiry...');

    try {
      const formData = new URLSearchParams(form);
      await fetch(SCRIPT_URL, { method: 'POST', body: formData });

      toast.success(`Thank you ${form.name}! Soundharraj will contact you shortly.`, {
        id: toastId,
        duration: 5000,
      });
      setForm({ name: '', phone: '', location: '', service: '', message: '' });
    } catch (err) {
      toast.error('Failed to send. Please try again.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
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
            Get In Touch
            <span className="line" />
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="section-subtitle">
            Get in touch for a free security consultation across all locations
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="glass-card contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '2rem', fontSize: '1.3rem' }}>
              Get In Touch
            </h3>

            {[
              { icon: 'pi-phone', title: 'Call Us (24/7)', lines: ['+91 98945 10065', 'All locations: Rasipuram, Salem, Viluppuram'] },
              { icon: 'pi-envelope', title: 'Email Us', lines: ['soundharraj9894@gmail.com', 'Owner: Soundharraj'] },
              { icon: 'pi-map-marker', title: 'Service Areas', lines: ['Rasipuram (HQ)', 'Salem • Namakkal • Viluppuram'] },
              { icon: 'pi-clock', title: 'Business Hours', lines: ['Mon - Sun: 8:00 AM - 8:00 PM', 'Emergency: 24/7 Available'] },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="contact-info-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <motion.div
                  className="contact-info-icon"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                >
                  <i className={`pi ${item.icon}`} />
                </motion.div>
                <div>
                  <h5>{item.title}</h5>
                  {item.lines.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input className="form-input" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your phone" required />
                </div>
              </div>

              <div className="form-group">
                <label>Service Location *</label>
                <select className="form-input" name="location" value={form.location} onChange={handleChange} required>
                  {locationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Service Required *</label>
                <select className="form-input" name="service" value={form.service} onChange={handleChange} required>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea className="form-input" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={4} required />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <><i className="pi pi-spin pi-spinner" /> Sending...</>
                ) : (
                  <><i className="pi pi-send" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
