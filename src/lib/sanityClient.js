import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "9vwj1j8e",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// Only the fields the gallery renders, only the categories it shows, and only
// documents that actually have an image (an incomplete document would otherwise
// make urlFor() throw). Newest first, so the order is stable.
const GALLERY_QUERY = `*[_type == "galleryImage" && category in ["Bridal", "Party"] && defined(image.asset)]
  | order(_createdAt desc){ _id, title, category, image }`;

let galleryRequest = null;

/**
 * Gallery images grouped by category. The request is shared and cached for the
 * lifetime of the page, so navigating away from and back to the home page
 * doesn't refetch. A failed request is not cached, so it can be retried.
 */
export function fetchGalleryImages() {
  if (!galleryRequest) {
    galleryRequest = client
      .fetch(GALLERY_QUERY)
      .then((data) => ({
        Bridal: data.filter((item) => item.category === "Bridal"),
        Party: data.filter((item) => item.category === "Party"),
      }))
      .catch((error) => {
        galleryRequest = null;
        throw error;
      });
  }
  return galleryRequest;
}
