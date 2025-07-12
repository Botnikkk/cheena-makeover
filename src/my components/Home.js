import React from 'react'
import{Link}from'react-router-dom'
const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;

export default function Home() {
    const isMobileDevice = () => {return /Mobi|Android|iPhone/i.test(navigator.userAgent);};
    const handleClick = () => {
    if (isMobileDevice()) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        navigator.clipboard.writeText(phoneNumber)
        .then(() => alert(`Phone number copied: ${phoneNumber}`))
        .catch(() => alert("Failed to copy number"));
    }
    };
    return (
        < div  id='home' className='section Home'>
            <div className='MainHomeContainer'>
                <Link className='LINK' to='/bridal'>
                    <div className='HomeServiceContainer'>
                        <img fetchpriority="high" className='HomeImage' src={require('./Images/bridal.webp')} alt='BRIDAL'/>
                        <div className='HomeServiceText'>BRIDAL</div>
                    </div>
                </Link>
                <div className='HomeLogoContainer'>
                    <img className='HomeLogo' src={require('./Images/logo.webp')} alt='LOGO'/>
                    <div className='TakeMeContainer'>
                        <div className='HomeLine'></div>
                        <span className='HomeTakeText'>TAKE ME TO</span>
                        <div className='HomeLine'></div>
                    </div>
                    <div className='SocialContainer'>
                        <span className="SocialText">GET IN TOUCH</span>
                        <div className="socials">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/cheenamakeover" className="social"><img src={require('./Images/instagram.png')} alt="Instragram"/></a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="social"><img src={require('./Images/facebook.png')} alt="Facebook"/></a>
                            <a target="_blank" rel="noreferrer" href="https://wa.me/7428147159?text=I'm%20interested%20in%20your%20car%20for%20sale" className="social"><img src={require('./Images/whatsapp.png')} alt="WhatsApp"/></a>
                            <img onClick={handleClick} className="social"src={require('./Images/mobile.png')} alt="Phone"/>
                        </div>
                    </div>
                </div>
                <Link className='LINK' to='/editorial'>
                    <div className='HomeServiceContainer'>
                        <img className='HomeImage' src={require('./Images/editorial.webp')} alt='EDITORIAL'/>
                        <div className='HomeServiceText'>EDITORIAL</div>
                    </div>
                </Link>
            </div>
        </div>
  )
}
