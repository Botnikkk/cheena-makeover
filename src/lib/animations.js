// Shared framer-motion variants. Everything is built once at module load so
// components don't allocate new objects on every render.

/** 3D flip used on desktop. */
export const flip = ({ duration = 1.2, exitDuration = 0.4 } = {}) => ({
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration, ease: "backOut" } },
  exit: { rotateY: 90, opacity: 0, transition: { duration: exitDuration, ease: "easeIn" } },
});

/** Slide-up fade used on mobile. */
export const rise = ({ duration = 0.6, y = 50, exitY = 20, exitDuration = 0.3 } = {}) => ({
  hidden: { y, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration, ease: "easeOut" } },
  exit: { y: exitY, opacity: 0, transition: { duration: exitDuration } },
});

/** Parent that staggers its children in (and out in reverse). */
export const stagger = ({ each, delay, exitEach }) => ({
  hidden: {},
  visible: { transition: { staggerChildren: each, delayChildren: delay } },
  exit: { transition: { staggerChildren: exitEach, staggerDirection: -1 } },
});

export const pick = (isMobile, desktop, mobile) => (isMobile ? mobile : desktop);

export const PRESERVE_3D = { transformStyle: "preserve-3d" };

// ---- Section heading (line — title — line) --------------------------------

export const lineVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "circOut" } },
  exit: { scaleX: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

export const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  exit: { opacity: 0, transition: { delay: 0.4, duration: 0.3 } },
};

export const serviceCardVariants = { desktop: flip(), mobile: rise() };

// ---- Service detail pages (Bridal / Party / Cocktail) ----------------------

export const detailLineVariant = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { delay: 0.3, duration: 0.5, ease: "easeOut" } },
  exit: { scaleX: 0, transition: { duration: 0.2 } },
};

export const detailTitleVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const detailInfoVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export const detailContainerVariants = {
  desktop: stagger({ each: 0.2, delay: 0.5, exitEach: 0.1 }),
  mobile: stagger({ each: 0.1, delay: 0.2, exitEach: 0.05 }),
};

export const detailCardVariants = {
  desktop: flip({ duration: 0.6 }),
  mobile: rise({ duration: 0.5 }),
};
