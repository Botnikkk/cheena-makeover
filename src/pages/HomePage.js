import React, { Suspense, lazy } from "react";

import ErrorBoundary from "../components/ErrorBoundary";
import GalleryShell, { GalleryMessage } from "../components/GalleryShell";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";

// Gallery pulls in react-bootstrap's Carousel and the Sanity client, so it's
// split out of the main bundle.
const Gallery = lazy(() => import("../sections/Gallery"));

// Holds the gallery's place while its chunk downloads, so the layout (and the
// "GALLERY" nav target) don't jump.
const galleryPlaceholder = <GalleryShell />;

// Shown if the gallery chunk fails to load or the gallery throws while rendering,
// so the rest of the home page keeps working.
const galleryUnavailable = (
  <GalleryShell>
    <GalleryMessage>Our gallery is unavailable right now. Please reload or check back soon.</GalleryMessage>
  </GalleryShell>
);

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <ErrorBoundary fallback={galleryUnavailable}>
        <Suspense fallback={galleryPlaceholder}>
          <Gallery />
        </Suspense>
      </ErrorBoundary>
      <Services />
    </>
  );
}
