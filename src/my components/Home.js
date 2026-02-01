import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const desktopContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 1.0 } },
  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
};

const desktopFlip = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: "backOut" } },
  exit: { rotateY: 90, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
};

const mobileContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const mobileFade = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.3 } }
};

export default function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER; 
    const handleWhatsapp = (e) => {
        e.preventDefault();
        const message = `Hello! I'm interested in your work and wish to enquire`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      };
    const currentContainer = isMobile ? mobileContainer : desktopContainer;
    const currentItem = isMobile ? mobileFade : desktopFlip;

    const handlePhone = () => {
        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            navigator.clipboard.writeText(phoneNumber)
            .then(() => alert(`Phone number copied: ${phoneNumber}`))
            .catch(() => alert("Failed to copy number"));
        }
    };

    return (
        <div id='home' className='section Home'>
            <motion.div className='MainHomeContainer' initial="hidden" animate="visible" exit="exit" variants={currentContainer} style={{ perspective: '1500px' }}>
                <motion.div variants={currentItem} style={{ transformStyle: "preserve-3d" }}>
                    <Link className='LINK' to='/bridal'>
                        <div className='HomeServiceContainer'>
                            <img fetchPriority="high" className='HomeImage' src={require('./Images/bridal.webp')} alt='BRIDAL'/>
                            <div className='HomeServiceText'>BRIDAL</div>
                        </div>
                    </Link>
                </motion.div>
                <motion.div className='HomeLogoContainer' variants={currentItem} style={{ transformStyle: "preserve-3d" }}>
                    <img className='HomeLogo' src={require('./Images/logo.png')} alt='LOGO'/>
                    <div className='TakeMeContainer'>
                        <div className='HomeLine'></div>
                        <span className='HomeTakeText'>TAKE ME TO</span>
                        <div className='HomeLine'></div>
                    </div>
                    <div className='SocialContainer'>
                        <span className="SocialText">GET IN TOUCH</span>
                        <div className="socials">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cheenamakeover" className="social"><img src={require('./Images/instagram.png')} alt="Instagram"/></a>
                            <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/N7Mn3KWZ4VCD33Q19?g_st=iwb" className="social"><img src={require('./Images/map.png')} alt="Facebook"/></a>
                            <img onClick={handleWhatsapp} className="social" src={require('./Images/whatsapp.png')} alt="WhatsApp"/>
                            <img onClick={handlePhone} className="social" src={require('./Images/mobile.png')} alt="Phone"/>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={currentItem} style={{ transformStyle: "preserve-3d" }}>
                    <Link className='LINK' to='/party'>
                        <div className='HomeServiceContainer'>
                            <img className='HomeImage' src={require('./Images/party.webp')} alt='Party'/>
                            <div className='HomeServiceText'>PARTY</div>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}