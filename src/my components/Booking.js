import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const desktopContainerVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { 
    rotateY: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "backOut", staggerChildren: 0.1, delayChildren: 0.3 } 
  },
  exit: { rotateY: 90, opacity: 0, transition: { duration: 0.5 } }
};

const mobileContainerVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 } 
  },
  exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
};

const formRowVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Booking() {
  const location = useLocation();
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  
  const initialService = location.state?.service || "";
  const initialType = location.state?.type || "";
  const defaultMessage = initialType ? `I am interested in the ${initialType} package. I wish to book an appointment in Delhi NCR` : "";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    service: initialService, 
    message: defaultMessage 
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").substring(0, 10);
      const formatted = digits.replace(/(\d{3})(\d{3})(\d{0,4})/, (match, p1, p2, p3) => { return p3 ? `${p1}-${p2}-${p3}` : `${p1}-${p2}`; });
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! My name is ${formData.name} and I would like to inquire about ${formData.service} Makeup.\n\n${formData.message}\n\nYou can contact me here: ${formData.phone} and here: ${formData.email}\n\nPlease reply soon!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const currentContainerVariant = isMobile ? mobileContainerVariant : desktopContainerVariant;

  return (
    <div className='section Booking'>
      <div className="BookingPerspectiveWrapper">
        
        <motion.div className='MainBookingContainer' initial="hidden" animate="visible" exit="exit" variants={currentContainerVariant} style={{ transformStyle: "preserve-3d" }}>
          <form className="form" onSubmit={handleSubmit}>
            
            <motion.div className="form-row" variants={formRowVariant}>
              <div className="form-group">
                <label>Your Name</label>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" required />
              </div>
            </motion.div>

            <motion.div className="form-row" variants={formRowVariant}>
              <div className="form-group">
                <label>Your Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="123-456-7890" required />
              </div>
              <div className="form-group">
                <label>Service Request</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Bridal">Bridal</option>
                  <option value="Party">Party</option>
                </select>
              </div>
            </motion.div>

            <motion.div className="form-group full-width" variants={formRowVariant}>
              <label>Your Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </motion.div>

            <motion.div className="form-submit" variants={formRowVariant}>
              <button className='BookingButton' type="submit">Send</button>
            </motion.div>

          </form>
        </motion.div>

      </div>
    </div>
  )
}