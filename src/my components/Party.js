import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ... (Your existing variants remain exactly the same) ...
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

const cardContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
    exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
};

const cardVariant = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.6, ease: "backOut" } },
    exit: { rotateY: 90, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } }
};

export default function Party() {
  return (
    <div className='section Party'>
      <div className='MainServiceContainer PartyContainer'>
            
            <div className='ServiceTitleContainer'>
                <motion.div 
                    className='ServiceLine' 
                    initial="hidden" animate="visible" exit="exit"
                    variants={lineEntryVariant}
                    style={{ originX: 1 }} 
                ></motion.div>

                <motion.span 
                    className='ServiceTitle'
                    initial="hidden" animate="visible" exit="exit"
                    variants={titleEntryVariant}
                >
                    Party
                </motion.span>

                <motion.div 
                    className='ServiceLine'
                    initial="hidden" animate="visible" exit="exit"
                    variants={lineEntryVariant}
                    style={{ originX: 0 }} 
                ></motion.div>
            </div>

            <motion.div 
                className='ServicesCardWrapper' 
                initial="hidden" animate="visible" exit="exit"
                variants={cardContainerVariant}
                style={{ perspective: '1000px' }} 
            >
                <motion.div className='ServiceCard' variants={cardVariant}>
                    <span className='CardTitle'>HD</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                    
                    <Link 
                        style={{ textDecoration: 'none', display:'block' }} 
                        to='/booking'
                        state={{ service: 'Party', type: 'HD' }} 
                    >
                        <button className='CardButton'>Book Now</button>
                    </Link>
                </motion.div>

                <motion.div className='ServiceCard' variants={cardVariant}>
                    <span className='CardTitle'>Air Brush</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>14,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>20,000</span>
                    
                    <Link 
                        style={{ textDecoration: 'none', display:'block' }} 
                        to='/booking'
                        state={{ service: 'Party', type: 'Air Brush' }}
                    >
                        <button className='CardButton'>Book Now</button>
                    </Link>
                </motion.div>
            </motion.div>

        </div>
    </div>
  )
}