import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919894510065"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
