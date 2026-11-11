const ORIGINAL = process.env.REACT_APP_PHONE_NUMBER;

afterEach(() => {
  if (ORIGINAL === undefined) delete process.env.REACT_APP_PHONE_NUMBER;
  else process.env.REACT_APP_PHONE_NUMBER = ORIGINAL;
});

// config.js reads the env var when it's first imported, so load it fresh per test.
function loadContact() {
  let mod;
  jest.isolateModules(() => {
    mod = require("./contact");
  });
  return mod;
}

test("builds wa.me and tel: links from a formatted number", () => {
  process.env.REACT_APP_PHONE_NUMBER = "+91 98765-43210";
  const { whatsappUrl, telUrl } = loadContact();
  expect(whatsappUrl("Hi there")).toBe("https://wa.me/919876543210?text=Hi%20there");
  expect(telUrl).toBe("tel:+919876543210");
});

test("returns null links (and openWhatsapp returns false) when no number is configured", () => {
  delete process.env.REACT_APP_PHONE_NUMBER;
  jest.spyOn(console, "error").mockImplementation(() => {});
  const { whatsappUrl, telUrl, openWhatsapp } = loadContact();
  expect(whatsappUrl("Hi")).toBeNull();
  expect(telUrl).toBeNull();
  expect(openWhatsapp("Hi")).toBe(false);
  jest.restoreAllMocks();
});
