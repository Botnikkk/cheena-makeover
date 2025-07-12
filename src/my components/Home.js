import React from 'react'
import{Link}from'react-router-dom'

export default function Home() {
const phoneNumber = '+91 7428147159';
const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
    .then(() => alert('Phone number copied! 📞'))
    .catch(err => alert('Failed to copy number 😵'));
};
  return (
    < div  id='home' className='section Home'>
        <div className='MainHomeContainer'>
            <Link className='LINK' to='/bridal'>
                <div className='HomeServiceContainer'>
                    <img className='HomeImage' src={require('./Images/bridal.png')} alt='BRIDAL'/>
                    <div className='HomeServiceText'>BRIDAL</div>
                </div>
            </Link>
            <div className='HomeLogoContainer'>
                <img className='HomeLogo' src={require('./Images/logo.png')} alt='LOGO'/>
                <div className='TakeMeContainer'>
                    <div className='HomeLine'></div>
                    <span className='HomeTakeText'>TAKE ME TO</span>
                    <div className='HomeLine'></div>
                </div>
                <div className='SocialContainer'>
                    <span className="SocialText">GET IN TOUCH</span>
                    <div className="socials">
                        <a target="_blank" href="https://www.instagram.com/cheenamakeover" className="social"><img src={require('./Images/instagram.png')} alt="Instragram"/></a>
                        <a target="_blank" href="#" className="social"><img src={require('./Images/facebook.png')} alt="Facebook"/></a>
                        <a target="_blank" href="https://wa.me/7428147159?text=I'm%20interested%20in%20your%20car%20for%20sale" className="social"><img src={require('./Images/whatsapp.png')} alt="WhatsApp"/></a>
                        <a onClick={handleCopy} href="" className="social"><img src={require('./Images/mobile.png')} alt="Phone"/></a>
                    </div>
                </div>
            </div>
            <Link className='LINK' to='/editorial'>
                <div className='HomeServiceContainer'>
                    <img className='HomeImage' src={require('./Images/editorial.png')} alt='EDITORIAL'/>
                    <div className='HomeServiceText'>EDITORIAL</div>
                </div>
            </Link>
        </div>
    </div>
  )
}
