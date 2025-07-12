import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

const importAll = (r) => {
  return r.keys().map(r);
};

export default function Gallery() {
  const bridalImages = importAll(require.context('./Images/Gallery/Bridal', false, /\.(png|jpe?g|svg)$/));
  const partyImages = importAll(require.context('./Images/Gallery/Party', false, /\.(png|jpe?g|svg)$/));

  return (
    <div id='gallery' className='section Gallery'>
      <div className='GalleryMainContainer'>
        <div className='CarouselContainer'>
          <Carousel fade prevIcon={<img className='GalleryArrow'  src={LeftArrow} alt='left-arrow'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right-arrow'/>}>
            {bridalImages.map((imgSrc, index) => (
              <Carousel.Item key={`bridal-${index}`}>
                <img className="GalleryImage d-block w-100" src={imgSrc} alt={`Bridal Slide ${index + 1}`} />
                <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='CarouselContainer'>
          <Carousel fade prevIcon={<img className='GalleryArrow' src={LeftArrow} alt='left-arrow'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right-arrow'/>}>
            {partyImages.map((imgSrc, index) => (
              <Carousel.Item key={`party-${index}`}>
                <img className="GalleryImage d-block w-100" src={imgSrc} alt={`Party Slide ${index + 1}`} />
                <Carousel.Caption><h3>Party</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
}
