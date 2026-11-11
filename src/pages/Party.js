import React from "react";

import ServiceDetail from "../components/ServiceDetail";
import { PRICES } from "../lib/config";

export default function Party() {
  return (
    <ServiceDetail
      className="Party"
      title="Party"
      bookingService="Party"
      prices={PRICES.party}
      inclusions="Makeup • Hair Styling • Draping • Regular false eyelash • Nail paint change"
      exclusions="EXCLUSIONS : Fresh Flowers / Gajra • Hair Extension • Hair Accessories"
    />
  );
}
