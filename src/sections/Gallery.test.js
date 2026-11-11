import { render, screen, waitFor } from "@testing-library/react";
import Gallery from "./Gallery";
import { fetchGalleryImages } from "../lib/sanityClient";

jest.mock("../lib/sanityClient", () => ({
  fetchGalleryImages: jest.fn(),
  urlFor: () => ({ width: () => ({ auto: () => ({ url: () => "https://example.test/img.jpg" }) }) }),
}));

beforeAll(() => {
  // Plain functions (not jest.fn): CRA's `resetMocks` would wipe jest.fn implementations.
  window.matchMedia =
    window.matchMedia ||
    ((query) => ({
      matches: false,
      media: query,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    }));
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("keeps the #gallery section (the nav target) and shows a message when the request fails", async () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  fetchGalleryImages.mockRejectedValue(new Error("network"));

  render(<Gallery />);

  expect(await screen.findByText(/gallery is unavailable/i)).toBeInTheDocument();
  expect(document.getElementById("gallery")).toBeInTheDocument();
});

test("skips documents without an image and doesn't draw an empty carousel", async () => {
  fetchGalleryImages.mockResolvedValue({
    Bridal: [
      { _id: "a", title: "No image yet" },
      { _id: "b", title: "Has image", image: { asset: { _ref: "image-abc-10x10-jpg" } } },
    ],
    Party: [],
  });

  const { container } = render(<Gallery />);

  await waitFor(() => expect(container.querySelector(".GalleryMainContainer")).toBeInTheDocument());
  expect(container.querySelectorAll(".CarouselContainer")).toHaveLength(1);
  expect(container.querySelectorAll(".carousel-item")).toHaveLength(1);
});

test("shows a friendly message when there are no images at all", async () => {
  fetchGalleryImages.mockResolvedValue({ Bridal: [], Party: [] });

  render(<Gallery />);

  expect(await screen.findByText("Gallery coming soon.")).toBeInTheDocument();
});
