import React from 'react'

export default function About() {
  return (
    <div id='about' className='section About'>
      <div className='MainAboutContainer'>
        <img className='AboutPicture' src={require('./Images/about.png')} alt='LOGO'/>
        <div className='AboutTextContainer'>
          <span className='AboutTitle'>ABOUT ME</span>
          <span className='AboutText'> Hi, I'm Heena — the artist behind Cheena Makeover. With years of experience as a professional makeup artist, I specialize in bridal, editorial, and celebrity makeup. From subtle elegance to bold glam, I tailor every look to highlight your natural beauty and personal style. I've had the privilege of working with many celebrities and brides, delivering flawless, high-definition finishes using premium products. Whether it's a wedding, photoshoot, or special event, I aim to make you feel confident, radiant, and camera-ready. At Cheena Makeover, beauty is personal — and I'm here to bring your dream look to life.</span>
        </div>
      </div>
    </div>
  )
}
