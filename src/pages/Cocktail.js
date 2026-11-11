import React from "react";

import ServiceDetail from "../components/ServiceDetail";
import { PRICES } from "../lib/config";

export default function Cocktail() {
  return (
    <ServiceDetail
      className="Cocktail"
      title="Cocktail Makeup"
      bookingService="Cocktail"
      prices={PRICES.cocktail}
      inclusions="Makeup • Hair Styling • Draping • Regular false eyelash • Nail paint change"
      exclusions="EXCLUSIONS : Fresh Flowers / Gajra • Hair Extension • Hair Accessories"
    />
  );
}
