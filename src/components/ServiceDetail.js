import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useIsMobile from "../hooks/useIsMobile";
import {
  detailLineVariant,
  detailTitleVariant,
  detailInfoVariant,
  detailContainerVariants,
  detailCardVariants,
  pick,
} from "../lib/animations";

const LINE_LEFT = { originX: 1 };
const LINE_RIGHT = { originX: 0 };

function PriceCard({ title, price, bookingState, variants }) {
  return (
    <motion.div className="ServiceCard" variants={variants}>
      <span className="CardTitle">{title}</span>
      <span className="CardPrice"><span className="ServiceRuppe">₹</span>{price}</span>
      <span className="CardInText">In Delhi/NCR</span>
      {/* The link itself is styled as the button (a <button> inside an <a> is invalid HTML). */}
      <Link className="CardButton" to="/booking" state={bookingState}>Book Now</Link>
    </motion.div>
  );
}

/**
 * One service page: HD card | package info | Air Brush card.
 * Bridal, Party and Cocktail only differ by the props below.
 *
 *  - className:      page class used by the stylesheet ("Bridal", "Party", ...)
 *  - title:          heading text
 *  - bookingService: value pre-selected in the booking form (must match one of its options)
 *  - prices:         { hd, air }
 *  - inclusions / exclusions: package text
 */
export default function ServiceDetail({ className, title, bookingService, prices, inclusions, exclusions }) {
  const isMobile = useIsMobile();
  const containerVariants = pick(isMobile, detailContainerVariants.desktop, detailContainerVariants.mobile);
  const cardVariants = pick(isMobile, detailCardVariants.desktop, detailCardVariants.mobile);

  return (
    <div className={`section ${className}`}>
      <div className="MainServiceContainer">
        <div className="ServiceTitleContainer">
          <motion.div className="ServiceLine" initial="hidden" animate="visible" exit="exit" variants={detailLineVariant} style={LINE_LEFT} />
          <motion.span className="ServiceTitle" initial="hidden" animate="visible" exit="exit" variants={detailTitleVariant}>
            {title}
          </motion.span>
          <motion.div className="ServiceLine" initial="hidden" animate="visible" exit="exit" variants={detailLineVariant} style={LINE_RIGHT} />
        </div>

        <motion.div className="ServicesCardWrapper" initial="hidden" animate="visible" exit="exit" variants={containerVariants}>
          <PriceCard title="HD" price={prices.hd} variants={cardVariants} bookingState={{ service: bookingService, type: "HD" }} />

          <motion.div className="InfoSection" initial="hidden" animate="visible" exit="exit" variants={detailInfoVariant}>
            <div className="InfoInner">
              <span className="InfoTitle">PACKAGE INCLUSIONS</span>
              <span className="InfoContent">{inclusions}</span>
              <span className="InfoExclusion">{exclusions}</span>
            </div>
            <span className="InfoDisclaimer">* For out of Delhi bookings, Travel & Accommodation charges are not included.</span>
          </motion.div>

          <PriceCard title="Air Brush" price={prices.air} variants={cardVariants} bookingState={{ service: bookingService, type: "Air Brush" }} />
        </motion.div>
      </div>
    </div>
  );
}
