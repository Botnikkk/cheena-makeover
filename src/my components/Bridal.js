import React from 'react'
import{Link}from'react-router-dom'


export default function Bridal() {
  return (
    <div className='section Bridal'>
      <div className='MainServiceContainer'>
            <div className='ServiceTitleContainer'>
                <div className='ServiceLine'></div>
                <span className='ServiceTitle'>Bridal</span>
                <div className='ServiceLine'></div>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>HD</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>24,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>34,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/booking'><button className='CardButton'>Book Now</button></Link>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>Air Brush</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>34,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>40,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/booking'><button className='CardButton'>Book Now</button></Link>
            </div>
        </div>
    </div>
  )
}
