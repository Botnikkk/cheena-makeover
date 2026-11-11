import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

import useIsMobile from "../hooks/useIsMobile";
import logo from "../assets/images/logo.webp";

const NAV_ITEMS = [
  { target: "home", label: "HOME" },
  { target: "about", label: "ABOUT" },
  { target: "gallery", label: "GALLERY" },
  { target: "services", label: "SERVICES" },
];

const LOGO_BASE_STYLE = { position: "fixed", top: 0, zIndex: 100, margin: "0 10rem" };

// How long to wait for the home page to mount before giving up (100ms * 50).
const POLL_INTERVAL_MS = 100;
const MAX_POLLS = 50;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const pendingScroll = useRef(null);

  const toggleNavbar = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Logo always goes home. If we're already on the home page, scroll back to the top.
  const goHome = (e) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const { scrollY } = useScroll();
  const logoHeight = useTransform(scrollY, [0, 100], ["10rem", "5.5rem"]);
  const logoRadius = useTransform(scrollY, [0, 100], ["0 0 3rem 3rem", "0 0 1rem 1rem"]);

  // Nudge the scroll position on arrival at home so the scroll-driven logo and
  // the nav's scroll-spy initialise.
  useEffect(() => {
    if (!isHome) return undefined;
    window.scrollTo(0, 1);
    const timer = setTimeout(() => window.scrollTo(0, 0), 50);
    return () => clearTimeout(timer);
  }, [isHome]);

  // Always close the mobile menu after navigating, or when growing past the mobile breakpoint.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // While the full-screen mobile menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const html = document.documentElement;
    const body = document.body;
    const previous = { html: html.style.overflow, body: body.style.overflow };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      html.style.overflow = previous.html;
      body.style.overflow = previous.body;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const cancelPendingScroll = useCallback(() => {
    clearInterval(pendingScroll.current);
    pendingScroll.current = null;
  }, []);

  // Stop polling if the header unmounts mid-navigation.
  useEffect(() => cancelPendingScroll, [cancelPendingScroll]);

  // From a sub-page: go home, wait for the section to exist, then scroll to it.
  const goToSection = useCallback(
    (target) => {
      cancelPendingScroll();
      setMenuOpen(false);
      navigate("/");

      let polls = 0;
      pendingScroll.current = setInterval(() => {
        const found = document.getElementById(target);
        if (found) {
          cancelPendingScroll();
          scroller.scrollTo(target, { duration: 500, delay: 0 });
        } else if (++polls >= MAX_POLLS) {
          cancelPendingScroll(); // never leave the interval running forever
        }
      }, POLL_INTERVAL_MS);
    },
    [navigate, cancelPendingScroll]
  );

  // react-scroll renders an <a> without an href, which the keyboard can't reach
  // or activate, so make it behave like a button.
  const onScrollLinkKeyDown = (target) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeMenu();
      scroller.scrollTo(target, { duration: 500, smooth: true });
    }
  };

  return (
    <nav className="NavBar">
      <Link to="/" onClick={goHome} aria-label="Home">
        <motion.img
          className="NavLogo"
          src={logo}
          alt="LOGO"
          // On phones the stylesheet pins the logo size, so skip the scroll-driven
          // height (it would force a layout on every scroll frame for no visual effect).
          style={isMobile ? LOGO_BASE_STYLE : { ...LOGO_BASE_STYLE, height: logoHeight, borderRadius: logoRadius }}
        />
      </Link>
      <button
        className="mobile-icon"
        onClick={toggleNavbar}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
      >
        ☰
      </button>
      <div id="site-nav" className={`NavContainer ${menuOpen ? "active" : ""}`}>
        {NAV_ITEMS.map(({ target, label }) =>
          isHome ? (
            <ScrollLink
              key={target}
              to={target}
              spy={true}
              duration={500}
              className="NavBarItem"
              role="button"
              tabIndex={0}
              onClick={closeMenu}
              onKeyDown={onScrollLinkKeyDown(target)}
            >
              {label}
            </ScrollLink>
          ) : (
            // Sub-pages are all part of "services", so that item stays highlighted.
            <button
              key={target}
              className={`NavBarItem${target === "services" ? " active" : ""}`}
              onClick={() => goToSection(target)}
            >
              {label}
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
