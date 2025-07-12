import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

const importAll = (r) => {
  return r.keys().map(r);
};

export default function Gallery() {
  const bridalImages = importAll(require.context('./Images/Gallery/Bridal', false, /\.(png|jpe?g|svg)$/));
  const editorialImages = importAll(require.context('./Images/Gallery/Editorial', false, /\.(png|jpe?g|svg)$/));

  return (
    <div id='gallery' className='section Gallery'>
      <div className='GalleryMainContainer'>
        <div className='CarouselContainer'>
          <Carousel fade prevIcon={<img src={LeftArrow} alt='left-arrow'/>} nextIcon={<img src={RightArrow} alt='right-arrow'/>}>
            {bridalImages.map((imgSrc, index) => (
              <Carousel.Item key={`bridal-${index}`}>
                <img className="GalleryImage d-block w-100" src={imgSrc} alt={`Bridal Slide ${index + 1}`} />
                <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='CarouselContainer'>
          <Carousel fade prevIcon={<img src={LeftArrow} alt='left-arrow'/>} nextIcon={<img src={RightArrow} alt='right-arrow'/>}>
            {editorialImages.map((imgSrc, index) => (
              <Carousel.Item key={`editorial-${index}`}>
                <img className="GalleryImage d-block w-100" src={imgSrc} alt={`Editorial Slide ${index + 1}`} />
                <Carousel.Caption><h3>Editorial</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
}
