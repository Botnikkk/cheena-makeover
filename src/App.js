import "./App.css";
import React from "react";
import { HashRouter, BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Bridal from "./pages/Bridal";
import BridalCocktail from "./pages/BridalCocktail";
import Cocktail from "./pages/Cocktail";
import Party from "./pages/Party";
import Booking from "./pages/Booking";

// Hash URLs (site/#/bridal) work on any static host with no configuration, but
// search engines ignore everything after the `#`. For a real-URL build set
// REACT_APP_ROUTER=browser and make the host serve index.html for unknown paths
// (see CHANGES.md). Only works when the site is served from the domain root.
const USE_BROWSER_ROUTER = process.env.REACT_APP_ROUTER === "browser";
const Router = USE_BROWSER_ROUTER ? BrowserRouter : HashRouter;
const routerProps = USE_BROWSER_ROUTER ? { basename: process.env.PUBLIC_URL || "/" } : {};

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/bridalcocktail" element={<BridalCocktail />} />
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/party" element={<Party />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router {...routerProps}>
        <Header />
        <AnimatedRoutes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
