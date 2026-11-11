import React from "react";

import ServiceChooser from "../components/ServiceChooser";
import { PRICES } from "../lib/config";

const CARDS = [
  { title: "Bridal", price: PRICES.bridal.hd, to: "/bridalcocktail" },
  { title: "Party", price: PRICES.party.hd, to: "/party" },
];

export default function Services() {
  return <ServiceChooser id="services" className="section Services" title="Services" cards={CARDS} />;
}
