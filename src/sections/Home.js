import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useIsMobile from "../hooks/useIsMobile";
import { flip, rise, stagger, pick, PRESERVE_3D } from "../lib/animations";
import { whatsappUrl, telUrl } from "../lib/contact";

import instagram from "../assets/socials/instagram.svg";
import maps from "../assets/socials/maps.svg";
import whatsapp from "../assets/socials/whatsapp.svg";
import call from "../assets/socials/call.svg";
import bridal from "../assets/images/bridal.webp";
import party from "../assets/images/party.webp";
import logo from "../assets/images/logo.webp";

const containerVariants = {
  desktop: stagger({ each: 0.2, delay: 1.0, exitEach: 0.1 }),
  mobile: stagger({ each: 0.1, delay: 0.5, exitEach: 0.05 }),
};

const itemVariants = {
  desktop: flip({ exitDuration: 0.5 }),
  mobile: rise(),
};

const CONTAINER_STYLE = { perspective: "1500px" };
const WHATSAPP_MESSAGE = "Hello! I'm interested in your work and wish to enquire";

const WHATSAPP_URL = whatsappUrl(WHATSAPP_MESSAGE);

function ServiceLink({ to, image, alt, label, eager, flat, variants }) {
  return (
    <motion.div variants={variants} style={flat ? undefined : PRESERVE_3D}>
      <Link className="LINK" to={to}>
        <div className="HomeServiceContainer">
          <img
            className="HomeImage"
            src={image}
            alt={alt}
            decoding="async"
            {...(eager ? { fetchPriority: "high" } : {})}
          />
          <div className="HomeServiceText">{label}</div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  const variants = pick(isMobile, containerVariants.desktop, containerVariants.mobile);
  const item = pick(isMobile, itemVariants.desktop, itemVariants.mobile);

  return (
    <div id="home" className="section Home">
      <motion.div
        className="MainHomeContainer"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        style={isMobile ? undefined : CONTAINER_STYLE}
      >
        <ServiceLink to="/bridalcocktail" image={bridal} alt="BRIDAL" label="BRIDAL" variants={item} flat={isMobile} eager />

        <motion.div className="HomeLogoContainer" variants={item} style={isMobile ? undefined : PRESERVE_3D}>
          <img className="HomeLogo" src={logo} alt="LOGO" decoding="async" />
          <div className="TakeMeContainer">
            <div className="HomeLine"></div>
            <span className="HomeTakeText">TAKE ME TO</span>
            <div className="HomeLine"></div>
          </div>
          <div className="SocialContainer">
            <span className="SocialText">GET IN TOUCH</span>
            <div className="socials">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cheenamakeover" className="social">
                <img src={instagram} alt="Instagram" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/N7Mn3KWZ4VCD33Q19?g_st=iwb" className="social">
                <img src={maps} alt="Google Maps" />
              </a>
              {/* Real links (not clickable images): keyboard-operable, long-press/copy works.
                  Hidden when no phone number was configured at build time. */}
              {WHATSAPP_URL && (
                <a target="_blank" rel="noreferrer" href={WHATSAPP_URL} className="social" aria-label="Message us on WhatsApp">
                  <img src={whatsapp} alt="" />
                </a>
              )}
              {telUrl && (
                <a href={telUrl} className="social" aria-label="Call us">
                  <img src={call} alt="" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <ServiceLink to="/party" image={party} alt="Party" label="PARTY" variants={item} flat={isMobile} />
      </motion.div>
    </div>
  );
}
