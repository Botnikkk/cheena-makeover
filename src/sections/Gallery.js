import React, { useState, useEffect, useMemo } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";

import GalleryShell, { GalleryMessage } from "../components/GalleryShell";
import useIsMobile from "../hooks/useIsMobile";
import { flip, rise, pick, PRESERVE_3D } from "../lib/animations";
import { fetchGalleryImages, urlFor } from "../lib/sanityClient";
import LeftArrow from "../assets/icons/left-arrow.svg";
import RightArrow from "../assets/icons/right-arrow.svg";

const desktopVariant = flip();
const mobileVariant = rise();

// Lower threshold on phones, where the carousels are tall relative to the screen.
const VIEWPORT_DESKTOP = { once: true, amount: 0.3 };
const VIEWPORT_MOBILE = { once: true, amount: 0.1 };

const PERSPECTIVE = { perspective: "1200px" };

// The arrows are decorative: react-bootstrap already adds hidden "Previous"/"Next" text.
const prevIcon = <img className="GalleryArrow" src={LeftArrow} alt="" aria-hidden="true" />;
const nextIcon = <img className="GalleryArrow" src={RightArrow} alt="" aria-hidden="true" />;

function buildSlides(items, label) {
  return items.flatMap((item, index) => {
    // Skip incomplete documents instead of letting urlFor() throw and blank the page.
    if (!item || !item.image || !item.image.asset) return [];
    try {
      return [
        {
          id: item._id || index,
          src: urlFor(item.image).width(800).auto("format").url(),
          alt: item.title || `${label} ${index + 1}`,
        },
      ];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
}

function GalleryCarousel({ label, items, variants, isMobile }) {
  // Build the image URLs once per data set instead of on every render.
  const slides = useMemo(() => buildSlides(items, label), [items, label]);

  // Don't draw an empty bordered box for a category with no images.
  if (slides.length === 0) return null;

  return (
    <motion.div
      className="CarouselContainer"
      initial="hidden"
      whileInView="visible"
      viewport={isMobile ? VIEWPORT_MOBILE : VIEWPORT_DESKTOP}
      variants={variants}
      style={isMobile ? undefined : PRESERVE_3D}
    >
      <Carousel fade prevIcon={prevIcon} nextIcon={nextIcon}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="GalleryImage d-block w-100"
              src={slide.src}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{label}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
}

export default function Gallery() {
  const isMobile = useIsMobile();
  const [images, setImages] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchGalleryImages()
      .then((data) => {
        if (!cancelled) setImages(data);
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Always render the section so the "GALLERY" nav link has a target, even if the request failed.
  if (failed) {
    return (
      <GalleryShell>
        <GalleryMessage>Our gallery is unavailable right now. Please reload or check back soon.</GalleryMessage>
      </GalleryShell>
    );
  }

  const variants = pick(isMobile, desktopVariant, mobileVariant);
  const hasImages = images && (images.Bridal.length > 0 || images.Party.length > 0);

  return (
    <GalleryShell>
      {/* While loading, render just the shell so the page doesn't jump once the images arrive. */}
      {images && (
        <div className="GalleryMainContainer" style={isMobile ? undefined : PERSPECTIVE}>
          {hasImages ? (
            <>
              <GalleryCarousel label="Bridal" items={images.Bridal} variants={variants} isMobile={isMobile} />
              <GalleryCarousel label="Party" items={images.Party} variants={variants} isMobile={isMobile} />
            </>
          ) : (
            <GalleryMessage>Gallery coming soon.</GalleryMessage>
          )}
        </div>
      )}
    </GalleryShell>
  );
}
