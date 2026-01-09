import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const lineVariant = {
    hidden: { scaleX: 0 },
    visible: { 
        scaleX: 1, 
        transition: { duration: 0.8, ease: "circOut" } 
    },
    exit: { 
        scaleX: 0, 
        transition: { duration: 0.4, ease: "easeInOut" } 
    }
};

const titleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { delay: 0.2, duration: 0.5 } 
    },
    exit: { 
        opacity: 0, 
        transition: { delay: 0.4, duration: 0.3 } 
    }
};

const cardFlipVariant = {
    hidden: { 
        rotateY: -90, 
        opacity: 0 
    },
    visible: { 
        rotateY: 0, 
        opacity: 1, 
        transition: { duration: 1.2, ease: "backOut" } 
    },
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    exit="exit" 
                    variants={lineVariant}
                    style={{ originX: 1 }} 
                ></motion.div>

                <motion.span 
                    className='ServiceTitle'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    exit="exit"
                    variants={titleVariant}
                >
                    Services
                </motion.span>

                <motion.div 
                    className='ServiceLine'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    exit="exit"
                    variants={lineVariant}
                    style={{ originX: 0 }} 
                ></motion.div>
            </div>

            <div 
                className='ServicesCardWrapper' 
                style={{ perspective: '1200px' }}
            >
                <motion.div 
                    className='ServiceCard' 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardFlipVariant}
                    exit="exit"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <span className='CardTitle'>Bridal</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>24,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>34,000</span>
                    <Link style={{ textDecoration: 'none', display:'block' }} to='/bridal'><button className='CardButton'>View Details</button></Link>
                </motion.div>

                <motion.div 
                    className='ServiceCard' 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardFlipVariant}
                    transition={{ delay: 0.2, duration: 1.2, ease: "backOut" }}
                    exit="exit"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <span className='CardTitle'>Party</span>
                    <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                    <span className='CardInText'>In Delhi/NCR</span>
                    <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                    <Link style={{ textDecoration: 'none', display:'block' }} to='/party'><button className='CardButton'>View Details</button></Link>
                </motion.div>
            </div>
        </div>
    </div>
  )
}