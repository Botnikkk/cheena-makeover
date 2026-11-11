import React from "react";

import ServiceDetail from "../components/ServiceDetail";
import { PRICES } from "../lib/config";

export default function Bridal() {
  return (
    <ServiceDetail
      className="Bridal"
      title="Bridal"
      bookingService="Bridal"
      prices={PRICES.bridal}
      inclusions="Makeup • Hair Styling • Hair Extension • Hair Accessories • Draping • Regular false eyelash • Nail paint change"
      exclusions="EXCLUSIONS : Fresh Flowers / Gajra"
    />
  );
}
