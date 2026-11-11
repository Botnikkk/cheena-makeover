import React from "react";

/** The gallery's section element. Always rendered so the "GALLERY" nav target exists. */
export default function GalleryShell({ children }) {
  return (
    <div id="gallery" className="section Gallery">
      {children}
    </div>
  );
}

export function GalleryMessage({ children }) {
  return <p className="GalleryMessage">{children}</p>;
}
