import React from "react";
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Header = () =>  {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
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
  
    scroller.scrollTo(selector, {
      duration: 500,
      delay: 0,
    });
  };
  return (
    <>
      <nav className='NavBar'>
        <a><img className='NavLogo' src={require('./Images/logo.png')} alt='LOGO'/></a>
        <div className='LogoCover'></div>
        <div className='NavContainer'>
          {location == ''? (
            <>
              <ScrollLink to="home" spy={true} duration={500} className='NavBarItem'>HOME</ScrollLink>
              <ScrollLink to="about" spy={true}  duration={500} className='NavBarItem'>ABOUT</ScrollLink>
              <ScrollLink to="gallery" spy={true} duration={500} className='NavBarItem'>GALLERY</ScrollLink>
              <ScrollLink to="services" spy={true} duration={500} className='NavBarItem'>SERVICE</ScrollLink>
            </>
          ):(
            <>
              <button className='NavBarItem' onClick={() => goToPageAndScroll("home")}>HOME</button>
              <button className='NavBarItem' onClick={() => goToPageAndScroll("about")}>ABOUT</button>
              <button className='NavBarItem' onClick={() => goToPageAndScroll("gallery")}>GALLERY</button>
              <button className='NavBarItem' onClick={() => goToPageAndScroll("services")}>SERVICE</button>
            </>
          )}  
        </div>   
      </nav>
    </>
  )
}

export default Header;