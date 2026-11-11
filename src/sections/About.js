import React from "react";
import { motion } from "framer-motion";

import useIsMobile from "../hooks/useIsMobile";
import { pick, PRESERVE_3D } from "../lib/animations";
import about from "../assets/images/about.webp";

const imageVariants = {
  desktop: {
    hidden: { rotateY: -90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 1.6, ease: "backOut" } },
  },
  mobile: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  },
};

const textVariants = {
  desktop: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } },
  },
  mobile: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  },
};

const VIEWPORT = { once: true, amount: 0.5 };
const VIEWPORT_MOBILE = { once: true, amount: 0.15 }; // text block can be taller than the screen on phones
const IMAGE_STYLE = { ...PRESERVE_3D, display: "inline-block" };

export default function About() {
  const isMobile = useIsMobile();

  return (
    <div id="about" className="section About">
      <div className="MainAboutContainer" style={{ perspective: "1200px" }}>
        <motion.div
          className="AboutImageWrapper"
          initial="hidden"
          whileInView="visible"
          viewport={isMobile ? VIEWPORT_MOBILE : VIEWPORT}
          variants={pick(isMobile, imageVariants.desktop, imageVariants.mobile)}
          style={IMAGE_STYLE}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/p/CnGf2-SvqaJ/"
            className="AboutImageContainer"
          >
            <img className="AboutPicture" src={about} alt="ABOUT" loading="lazy" decoding="async" />
          </a>
        </motion.div>

        <motion.div
          className="AboutTextContainer"
          initial="hidden"
          whileInView="visible"
          viewport={isMobile ? VIEWPORT_MOBILE : VIEWPORT}
          variants={pick(isMobile, textVariants.desktop, textVariants.mobile)}
        >
          <span className="AboutTitle">ABOUT ME</span>
          <span className="AboutText">
            Hi, I'm Heena — the artist behind Cheena Makeover. With years of experience as a professional makeup artist, I specialize in bridal, party, and celebrity makeup. From subtle elegance to bold glam, I tailor every look to highlight your natural beauty and personal style. I've had the privilege of working with many celebrities and brides, delivering flawless, high-definition finishes using premium products. Whether it's a wedding, photoshoot, or special event, I aim to make you feel confident, radiant, and camera-ready. At Cheena Makeover, beauty is personal — and I'm here to bring your dream look to life.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
