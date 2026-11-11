import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import useIsMobile from "../hooks/useIsMobile";
import { pick, PRESERVE_3D } from "../lib/animations";
import { openWhatsapp } from "../lib/contact";

const containerVariants = {
  desktop: {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut", staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: { rotateY: 90, opacity: 0, transition: { duration: 0.5 } },
  },
  mobile: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
  },
};

const formRowVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// Free-form on purpose: clients may be NRIs with +1 / +44 numbers, so don't force a 10-digit Indian mask.
const PHONE_PATTERN = "[0-9+\\-\\s()]{7,20}";
const cleanPhone = (value) => value.replace(/[^\d+\-\s()]/g, "").slice(0, 20);

export default function Booking() {
  const isMobile = useIsMobile();
  const { state } = useLocation();

  const initialType = state?.type || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: state?.service || "",
    message: initialType
      ? `I am interested in the ${initialType} package. I wish to book an appointment in Delhi NCR`
      : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "phone" ? cleanPhone(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsapp(
      `Hello! My name is ${formData.name} and I would like to inquire about ${formData.service} Makeup.\n\n${formData.message}\n\nYou can contact me here: ${formData.phone} and here: ${formData.email}\n\nPlease reply soon!`
    );
  };

  return (
    <div className="section Booking">
      <div className="BookingPerspectiveWrapper">
        <motion.div
          className="MainBookingContainer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pick(isMobile, containerVariants.desktop, containerVariants.mobile)}
          style={PRESERVE_3D}
        >
          <form className="form" onSubmit={handleSubmit}>
            <motion.div className="form-row" variants={formRowVariant}>
              <div className="form-group">
                <label htmlFor="booking-name">Your Name</label>
                <input id="booking-name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="booking-email">Your Email (optional)</label>
                <input id="booking-email" name="email" value={formData.email} onChange={handleChange} type="email" autoComplete="email" />
              </div>
            </motion.div>

            <motion.div className="form-row" variants={formRowVariant}>
              <div className="form-group">
                <label htmlFor="booking-phone">Your Phone</label>
                <input
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  pattern={PHONE_PATTERN}
                  title="Enter your phone number, e.g. +91 98765 43210"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="booking-service">Service Request</label>
                <select id="booking-service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Bridal">Bridal</option>
                  <option value="Party">Party</option>
                  <option value="Cocktail">Cocktail</option>
                </select>
              </div>
            </motion.div>

            <motion.div className="form-group full-width" variants={formRowVariant}>
              <label htmlFor="booking-message">Your Message</label>
              <textarea id="booking-message" name="message" value={formData.message} onChange={handleChange} required />
            </motion.div>

            <motion.div className="form-submit" variants={formRowVariant}>
              <button className="BookingButton" type="submit">Send</button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}