import React from 'react'
import { Link} from 'react-scroll';

export default function Header() {
  return (
    <>
      <nav className='NavBar'>
        <img className='NavLogo' src={require('./Images/logo.png')} alt='LOGO'/>
        <div className='LogoCover'></div>
        <div className='NavContainer'>
          <Link activeClass="active" to="home" spy={true} duration={500} className='NavBarItem' href='#home'>HOME</Link>
          <Link activeClass="active" to="about" spy={true} duration={500} className='NavBarItem' href='#about' >ABOUT</Link>
          <Link activeClass="active" to="gallery" spy={true} duration={500} className='NavBarItem' href='#gallery'>GALLERY</Link>
          <Link activeClass="active" to="services" spy={true} duration={500} className='NavBarItem' href='#services'>SERVICES</Link>
        </div>   
      </nav>
    </>
  )
}
