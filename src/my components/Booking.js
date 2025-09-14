import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({ name: "",email: "",phone: "",service: "",message: "",});
  const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
  const handleChange = (e) => {
    const { name, value } = e.target; 
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").substring(0, 10);  
      const formatted = digits.replace(/(\d{3})(\d{3})(\d{0,4})/, (match, p1, p2, p3) => {return p3 ? `${p1}-${p2}-${p3}` : `${p1}-${p2}`;}); 
      setFormData((prev) => ({...prev, [name]: formatted,}));
    } else {
      setFormData((prev) => ({...prev,[name]: value,})); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! My name is ${formData.name} and I would like to inquire about ${formData.service} Makeup.\n\n${formData.message}\n\nYou can contact me here: ${formData.phone} and ${formData.email}\n\nPlease reply soon!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className='section Booking'>
        <div className='MainBookingContainer'>
          <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input name="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" required/>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel"  placeholder="123-456-7890" required/>
                </div>
                <div className="form-group">
                  <label>Service Request</label>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="Bridal">Bridal</option>
                    <option value="Party">Party</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required/>
              </div>

              <div className="form-submit">
                <button className='BookingButton' type="submit">Send</button>
              </div>
          </form>
        </div>
    </div>
  )
}
