import React, { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller} from "react-scroll";

const Header = () =>  {
  
  
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const toggleNavbar = useCallback(() => {setMenuOpen(prev => !prev);}, []);
  useEffect(() => {
    if (location === "") {
      window.scrollTo(0, 1);
      setTimeout(() => {window.scrollTo(0, 0);},50);
    }
  }, [location]);
  const goToPageAndScroll = useCallback(async (selector) => {
    await navigate("/");
    const waitForElement = (selector) =>
      new Promise((resolve) => {
        const interval = setInterval(() => {
          const el = document.getElementById(selector) || document.querySelector(`[name='${selector}']`);
          if (el) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
    await waitForElement(selector);
    scroller.scrollTo(selector, { duration: 500, delay: 0 });
    setMenuOpen(false);
  }, [navigate]);
  return (
    <>
      <nav className="NavBar">
      <img className="NavLogo" src={require("./Images/logo.png")} alt="LOGO"/>
      <button className="mobile-icon" onClick={toggleNavbar}>☰</button>
      <div className={`NavContainer ${menuOpen ? "active" : ""}`}>
        {location === "" ? (
          <>
            <ScrollLink to="home"  spy={true} duration={500} className="NavBarItem" onClick={() => setMenuOpen(false)}>HOME</ScrollLink>
            <ScrollLink to="about" spy={true} duration={500} className="NavBarItem" onClick={() => setMenuOpen(false)}>ABOUT</ScrollLink>
            <ScrollLink to="gallery" spy={true} duration={500} className="NavBarItem" onClick={() => setMenuOpen(false)}>GALLERY</ScrollLink>
            <ScrollLink to="services" spy={true} duration={500} className="NavBarItem" onClick={() => setMenuOpen(false)}>SERVICE</ScrollLink>
          </>
        ) : (
          <>
            <button className="NavBarItem" onClick={() => goToPageAndScroll("home")}>HOME</button>
            <button className="NavBarItem" onClick={() => goToPageAndScroll("about")}>ABOUT</button>
            <button className="NavBarItem" onClick={() => goToPageAndScroll("gallery")}>GALLERY</button>
            <button className="NavBarItem" onClick={() => goToPageAndScroll("services")}>SERVICE</button>
          </>
        )}
      </div>
    </nav>
    </>
  )
}

export default Header;