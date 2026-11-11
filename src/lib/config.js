// Central place for every build-time environment variable.
// (CRA only inlines `process.env.REACT_APP_*` when written out literally.)
//
// `scripts/check-env.js` (run as `prebuild`) fails the build if any of these
// are missing, so the fallbacks below only matter in local development.

const PRICE_FALLBACK = "PRICE NOT FOUND";

// Digits only, with country code (e.g. 919876543210) - what wa.me and tel: need.
export const PHONE_DIGITS = (process.env.REACT_APP_PHONE_NUMBER || "").replace(/\D/g, "");

export const PRICES = {
  bridal: {
    hd: process.env.REACT_APP_BRIDAL_HD || PRICE_FALLBACK,
    air: process.env.REACT_APP_BRIDAL_AIR || PRICE_FALLBACK,
  },
  party: {
    hd: process.env.REACT_APP_PARTY_HD || PRICE_FALLBACK,
    air: process.env.REACT_APP_PARTY_AIR || PRICE_FALLBACK,
  },
  cocktail: {
    hd: process.env.REACT_APP_COCKTAIL_HD || PRICE_FALLBACK,
    air: process.env.REACT_APP_COCKTAIL_AIR || PRICE_FALLBACK,
  },
};
