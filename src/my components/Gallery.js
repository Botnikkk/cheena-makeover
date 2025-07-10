import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Gallery() {
  return (
    <div id='gallery' className='section Gallery'>
        <div className='GalleryMainContainer'>
            <div className='CarouselContainer'>
                <Carousel fade  prevIcon={<span className="custom-arrow">‹</span>} nextIcon={<span className="custom-arrow">›</span>}>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/bridal.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/editorial.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/about.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='CarouselContainer'>
                <Carousel fade  prevIcon={<span className="custom-arrow">‹</span>} nextIcon={<span className="custom-arrow">›</span>}>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/bridal.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Editorial</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/editorial.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Editorial</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="GalleryImage d-block w-100" src={require('./Images/about.png')} alt="Bridal Makeup Slide"/>
                        <Carousel.Caption><h3>Editorial</h3></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
  )
}
