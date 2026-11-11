import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

// Keep the test offline: the gallery would otherwise hit Sanity.
jest.mock("./lib/sanityClient", () => ({
  fetchGalleryImages: () => Promise.resolve({ Bridal: [], Party: [] }),
  urlFor: () => ({ width: () => ({ auto: () => ({ url: () => "" }) }) }),
}));

beforeAll(() => {
  // jsdom doesn't implement these, but framer-motion / the hooks rely on them.
  window.matchMedia =
    window.matchMedia ||
    ((query) => ({
      matches: false,
      media: query,
      addListener: () => {}, // used by framer-motion's reduced-motion check
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    }));
  window.scrollTo = () => {};
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders the home page sections", async () => {
  render(<App />);
  expect(screen.getByText("ABOUT ME")).toBeInTheDocument();
  expect(await screen.findByText("Services")).toBeInTheDocument();
  // The lazily loaded gallery fills its placeholder once its data resolves.
  await waitFor(() => expect(document.querySelector(".GalleryMainContainer")).toBeInTheDocument());
});
