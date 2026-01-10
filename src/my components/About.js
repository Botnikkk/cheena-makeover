import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const desktopImageVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 1.6, ease: "backOut" } }
};

const mobileImageVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const desktopTextVariant = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } }
};

const mobileTextVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }
};

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImageVariant = isMobile ? mobileImageVariant : desktopImageVariant;
  const currentTextVariant = isMobile ? mobileTextVariant : desktopTextVariant;

  return (
    <div id='about' className='section About'>
      <div className='MainAboutContainer' style={{ perspective: '1200px' }}>
        <motion.div className="AboutImageWrapper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={currentImageVariant} style={{ transformStyle: "preserve-3d", display: 'inline-block' }}>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/p/CnGf2-SvqaJ/" className="AboutImageContainer">
            <img className='AboutPicture' src={require('./Images/about.webp')} alt='ABOUT'/>
          </a>
        </motion.div>

        <motion.div className='AboutTextContainer' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={currentTextVariant}>
          <span className='AboutTitle'>ABOUT ME</span>
          <span className='AboutText'> 
            Hi, I'm Heena — the artist behind Cheena Makeover. With years of experience as a professional makeup artist, I specialize in bridal, party, and celebrity makeup. From subtle elegance to bold glam, I tailor every look to highlight your natural beauty and personal style. I've had the privilege of working with many celebrities and brides, delivering flawless, high-definition finishes using premium products. Whether it's a wedding, photoshoot, or special event, I aim to make you feel confident, radiant, and camera-ready. At Cheena Makeover, beauty is personal — and I'm here to bring your dream look to life.
          </span>
        </motion.div>
      </div>
    </div>
  )
}