import React from 'react'
import{Link}from'react-router-dom'


export default function Editorial() {
  return (
    <div className='section Editorial'>
      <div className='MainServiceContainer EditorialContainer'>
            <div className='ServiceTitleContainer'>
                <div className='ServiceLine'></div>
                <span className='ServiceTitle'>Editorial</span>
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
            <div className='ServiceCard'>
                <span className='CardTitle'>Group</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>00,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>00,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/booking'><button className='CardButton'>Book Now</button></Link>
            </div>
        </div>
    </div>
  )
}
