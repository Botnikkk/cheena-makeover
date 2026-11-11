import React from "react";

import ServiceChooser from "../components/ServiceChooser";
import { PRICES } from "../lib/config";

const CARDS = [
  { title: "Bridal", price: PRICES.bridal.hd, to: "/bridal" },
  { title: "Cocktail", price: PRICES.cocktail.hd, to: "/cocktail" },
];

// No `id="services"` here: the home page already owns that id, and a duplicate
// made the header's "SERVICES" link scroll the page we were leaving.
export default function BridalCocktail() {
  return <ServiceChooser className="section Services BridalCocktail" title="Bridal & Cocktail" cards={CARDS} />;
}
