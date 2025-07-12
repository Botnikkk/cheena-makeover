import React from 'react'
import{Link}from'react-router-dom'


export default function Party() {
  return (
    <div className='section Party'>
      <div className='MainServiceContainer PartyContainer'>
            <div className='ServiceTitleContainer'>
                <div className='ServiceLine'></div>
                <span className='ServiceTitle'>Party</span>
                <div className='ServiceLine'></div>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>HD</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/booking'><button className='CardButton'>Book Now</button></Link>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>HD + Air Brush</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>14,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>20,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/booking'><button className='CardButton'>Book Now</button></Link>
            </div>
        </div>
    </div>
  )
}
