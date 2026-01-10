import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanityClient';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

const desktopVariant = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 1.2, ease: "backOut" } }
};

const mobileVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Gallery() {
  const [bridalImages, setBridalImages] = useState([]);
  const [partyImages, setPartyImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    client.fetch('*[_type == "galleryImage"]').then((data) => {
      setBridalImages(data.filter(item => item.category === 'Bridal'));
      setPartyImages(data.filter(item => item.category === 'Party'));
      setLoading(false);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return null;

  const currentVariant = isMobile ? mobileVariant : desktopVariant;

  return (
    <div id='gallery' className='section Gallery'>
      <div className='GalleryMainContainer' style={{ perspective: '1200px' }}>
        
        <motion.div className='CarouselContainer' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={currentVariant} style={{ transformStyle: "preserve-3d" }}>
          <Carousel fade prevIcon={<img className='GalleryArrow' src={LeftArrow} alt='left'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right'/>}>
            {bridalImages.map((item, index) => (
              <Carousel.Item key={item._id || index}>
                <img className="GalleryImage d-block w-100" src={urlFor(item.image).width(800).url()} alt={item.title || `Bridal ${index + 1}`} />
                <Carousel.Caption><h3>Bridal</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

        <motion.div className='CarouselContainer' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={currentVariant} transition={{ ...currentVariant.visible.transition, delay: 0.2 }} style={{ transformStyle: "preserve-3d" }}>
          <Carousel fade prevIcon={<img className='GalleryArrow' src={LeftArrow} alt='left'/>} nextIcon={<img className='GalleryArrow' src={RightArrow} alt='right'/>}>
            {partyImages.map((item, index) => (
              <Carousel.Item key={item._id || index}>
                <img className="GalleryImage d-block w-100" src={urlFor(item.image).width(800).url()} alt={item.title || `Party ${index + 1}`} />
                <Carousel.Caption><h3>Party</h3></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

      </div>
    </div>
  );
}