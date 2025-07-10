import React from 'react'

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
                <button className='CardButton'>View Details</button>
            </div>
            <div className='ServiceCard'>
                <span className='CardTitle'>Editorial</span>
                <span className='CardPrice'><span className='ServiceRuppe'>₹</span>8,000</span>
                <span className='CardInText'>In Delhi/NCR</span>
                <span className='CardOutText'>Out of Delhi : <span className='ServiceRuppe'>₹</span>15,000</span>
                <button className='CardButton'>View Details</button>
            </div>
        </div>
    </div>
  )
}
