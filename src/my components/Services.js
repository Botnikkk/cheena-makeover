import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const lineExitVariant = {
    exit: { 
        scaleX: 0, 
        transition: { duration: 0.4, ease: "easeInOut" } 
    }
};


const titleExitVariant = {
    exit: { 
        opacity: 0, 
        transition: { delay: 0.4, duration: 0.3 } 
    }
};


const cardContainerExit = {
    exit: {
        transition: { staggerChildren: 0.1 }
    }
};


const cardExit = {
    exit: {
        rotateY: 90,
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" }
    }
};

export default function Services() {
  return (
    <div id='services' className='section Services'>
        <div className='MainServiceContainer'>
            
            <div className='ServiceTitleContainer'>
                <motion.div 
                    className='ServiceLine'
                    exit="exit" 
                    variants={lineExitVariant}
                    style={{ originX: 1 }} 
                ></motion.div>

                <motion.span 
                    className='ServiceTitle'
                    exit="exit"
                    variants={titleExitVariant}
                >
                    Services
                </motion.span>

                <motion.div 
                    className='ServiceLine'
                    exit="exit"
                    variants={lineExitVariant}
                    style={{ originX: 0 }} 
                ></motion.div>
            </div>

            <motion.div 
                className='ServicesCardWrapper' 
                variants={cardContainerExit}
                exit="exit"
            >
                <motion.div className='ServiceCard' variants={cardExit}>
                    <span className='CardTitle'>Bridal</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>24,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>34,000</span>
                    <Link style={{ textDecoration: 'none', display:'block' }} to='/bridal'><button className='CardButton'>View Details</button></Link>
                </motion.div>

                <motion.div className='ServiceCard' variants={cardExit}>
                    <span className='CardTitle'>Party</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                    <Link style={{ textDecoration: 'none', display:'block' }} to='/party'><button className='CardButton'>View Details</button></Link>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}