import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanityClient';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

const cardFlipVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { 
    rotateY: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: "backOut" } 
  }
};

export default function Gallery() {
  const [bridalImages, setBridalImages] = useState([]);
  const [partyImages, setPartyImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "galleryImage"]';

    client.fetch(query)
      .then((data) => {
        const bridal = data.filter(item => item.category === 'Bridal');
        const party = data.filter(item => item.category === 'Party');
        
        setBridalImages(bridal);
        setPartyImages(party);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return null;

  return (
    <div id='gallery' className='section Gallery'>
      <div className='GalleryMainContainer' style={{ perspective: '1200px' }}>
        
        <motion.div 
            className='CarouselContainer'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardFlipVariant}
            style={{ transformStyle: "preserve-3d" }}
        >
          <Carousel fade prevIcon={<img className='GalleryArrow'  src={LeftArrow} alt='left-arrow'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right-arrow'/>}>
            {bridalImages.map((item, index) => (
              <Carousel.Item key={item._id || index}>                <img 
                  className="GalleryImage d-block w-100" 
                  src={urlFor(item.image).width(800).url()} 
                  alt={item.title || `Bridal ${index + 1}`} 
                />
                <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

        <motion.div 
            className='CarouselContainer'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardFlipVariant}
            transition={{ delay: 0.2, duration: 1.2, ease: "backOut" }} 
            style={{ transformStyle: "preserve-3d" }}
        >
          <Carousel fade prevIcon={<img className='GalleryArrow' src={LeftArrow} alt='left-arrow'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right-arrow'/>}>
            {partyImages.map((item, index) => (
              <Carousel.Item key={item._id || index}>
                <img 
                  className="GalleryImage d-block w-100" 
                  src={urlFor(item.image).width(800).url()} 
                  alt={item.title || `Party ${index + 1}`} 
                />
                <Carousel.Caption><h3>Party</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

      </div>
    </div>
  );
}