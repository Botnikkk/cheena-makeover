import React from 'react'
import{Link}from'react-router-dom'


export default function Services() {
  return (
    <div id='services' className='section Services'>
        <div className='MainServiceContainer'>
            <div className='ServiceTitleContainer'>
                <div className='ServiceLine'></div>
                <span className='ServiceTitle'>Choose your service</span>
                <div className='ServiceLine'></div>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>Bridal</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>24,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>34,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/bridal'><button className='CardButton'>View Details</button></Link>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>Editorial</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                <Link style={{ textDecoration: 'none', display:'block' }} to='/editorial'><button className='CardButton'>View Details</button></Link>
            </div>
        </div>
    </div>
  )
}
