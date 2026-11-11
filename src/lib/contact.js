import { PHONE_DIGITS } from "./config";

/** `https://wa.me/...` link pre-filled with `message`, or null if no number is configured. */
export const whatsappUrl = (message = "") =>
  PHONE_DIGITS ? `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}` : null;

/** `tel:` link, or null if no number is configured. */
export const telUrl = PHONE_DIGITS ? `tel:+${PHONE_DIGITS}` : null;

/** Opens a WhatsApp chat with the studio. Returns false (and does nothing) if no number is configured. */
export function openWhatsapp(message) {
  const url = whatsappUrl(message);
  if (!url) {
    console.error("REACT_APP_PHONE_NUMBER is not set; cannot open WhatsApp.");
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}
