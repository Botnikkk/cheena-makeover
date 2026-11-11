import { useSyncExternalStore } from "react";

// Same breakpoint the old `window.innerWidth < 900` checks used.
const QUERY = "(max-width: 899.98px)";

const subscribe = (callback) => {
  const mql = window.matchMedia(QUERY);
  // Safari < 14 only has the deprecated addListener/removeListener.
  if (mql.addEventListener) {
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  }
  mql.addListener(callback);
  return () => mql.removeListener(callback);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * True below 900px. Unlike a `resize` listener this only re-renders when the
 * breakpoint is actually crossed, not on every pixel of a window drag.
 */
export default function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
