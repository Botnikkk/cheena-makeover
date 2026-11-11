import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import useIsMobile from "../hooks/useIsMobile";
import { lineVariant, titleVariant, serviceCardVariants, pick, PRESERVE_3D } from "../lib/animations";

const LINE_LEFT = { originX: 1 };
const LINE_RIGHT = { originX: 0 };
const WRAPPER_STYLE = { perspective: "1200px" };
const VIEWPORT_ONCE = { once: true };
const VIEWPORT_CARD = { once: true, amount: 0.3 };
// Phones: trigger as soon as a sliver of the (tall) card is on screen. The 3D
// context is also skipped there, since only the desktop flip needs it.
const VIEWPORT_CARD_MOBILE = { once: true, amount: 0.1 };

/**
 * Heading plus two "View Details" cards. Shared by the home-page Services
 * section and the Bridal & Cocktail page, which were identical copies.
 *
 * `cards` is `[{ title, price, to }, { title, price, to }]`.
 */
export default function ServiceChooser({ id, className, title, cards }) {
  const isMobile = useIsMobile();
  const cardVariants = pick(isMobile, serviceCardVariants.desktop, serviceCardVariants.mobile);

  return (
    <div id={id} className={className}>
      <div className="MainServiceContainer">
        <div className="ServiceTitleContainer">
          <motion.div className="ServiceLine" initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} exit="exit" variants={lineVariant} style={LINE_LEFT} />
          <motion.span className="ServiceTitle" initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} exit="exit" variants={titleVariant}>
            {title}
          </motion.span>
          <motion.div className="ServiceLine" initial="hidden" whileInView="visible" viewport={VIEWPORT_ONCE} exit="exit" variants={lineVariant} style={LINE_RIGHT} />
        </div>

        <div className="ServicesCardWrapper" style={isMobile ? undefined : WRAPPER_STYLE}>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="ServiceCard"
              initial="hidden"
              whileInView="visible"
              viewport={isMobile ? VIEWPORT_CARD_MOBILE : VIEWPORT_CARD}
              variants={cardVariants}
              exit="exit"
              style={isMobile ? undefined : PRESERVE_3D}
            >
              <span className="CardTitle">{card.title}</span>
              <span className="CardPrice"><span className="ServiceRuppe">₹</span>{card.price}</span>
              <span className="CardInText">In Delhi/NCR</span>
              {/* The link itself is styled as the button (a <button> inside an <a> is invalid HTML). */}
              <Link className="CardButton" to={card.to}>View Details</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
