import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const titleEntryVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

const lineEntryVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.4, ease: "easeOut" } },
  exit: { scaleX: 0, transition: { duration: 0.5 } }
};

const desktopContainerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
};

const mobileContainerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const desktopCardVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 0.6, ease: "backOut" } },
  exit: { rotateY: 90, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }
};

const mobileCardVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
};
const infoEntryVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

export default function Party() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentContainerVariant = isMobile ? mobileContainerVariant : desktopContainerVariant;
  const currentCardVariant = isMobile ? mobileCardVariant : desktopCardVariant;

  return (
    <div className='section Party'>
      <div className='MainServiceContainer PartyContainer'>
        
        <div className='ServiceTitleContainer'>
          <motion.div className='ServiceLine' initial="hidden" animate="visible" exit="exit" variants={lineEntryVariant} style={{ originX: 1 }}></motion.div>
          <motion.span className='ServiceTitle' initial="hidden" animate="visible" exit="exit" variants={titleEntryVariant}>Party</motion.span>
          <motion.div className='ServiceLine' initial="hidden" animate="visible" exit="exit" variants={lineEntryVariant} style={{ originX: 0 }}></motion.div>
        </div>

        <motion.div className='ServicesCardWrapper' initial="hidden" animate="visible" exit="exit" variants={currentContainerVariant} style={{ perspective: '1000px' }}>
          
          <motion.div className='ServiceCard' variants={currentCardVariant}>
            <span className='CardTitle'>HD</span>
            <span className='CardPrice'><span className='ServiceRuppe'>₹</span>6,000</span>
            <span className='CardInText'>In Delhi/NCR</span>
            <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>10,000</span>
            <Link style={{ textDecoration: 'none', display:'block' }} to='/booking' state={{ service: 'Party', type: 'HD' }}><button className='CardButton'>Book Now</button></Link>
          </motion.div>
          <motion.div className='InfoSection' initial="hidden" animate="visible" exit="exit" variants={infoEntryVariant}>
          <div className='InfoInner'>
            <span className='InfoTitle'>PACKAGE INCLUSIONS</span>
            <span className='InfoContent'>Makeup • Hair Styling • Draping • Regular false eyelash • Nail paint change</span>
            <span className='InfoExclusion'>EXCLUSIONS : Fresh Flowers / Gajra • Hair Exstension • Hair Asccesories</span>
          </div>
          <span className='InfoDisclaimer'>* For out of Delhi bookings, Travel & Accommodation charges are not included.</span>
          </motion.div>
          <motion.div className='ServiceCard' variants={currentCardVariant}>
            <span className='CardTitle'>Air Brush</span>
            <span className='CardPrice'><span className='ServiceRuppe'>₹</span>10,000</span>
            <span className='CardInText'>In Delhi/NCR</span>
            <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
            <Link style={{ textDecoration: 'none', display:'block' }} to='/booking' state={{ service: 'Party', type: 'Air Brush' }}><button className='CardButton'>Book Now</button></Link>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}