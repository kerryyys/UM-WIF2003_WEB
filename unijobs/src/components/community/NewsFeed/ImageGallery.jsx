import React from 'react';
import ImageItem from './ImageItem'; // Import ImageItem if it's in a different file
import { Button } from 'react-bootstrap';
import '../../../components-css/Community/ImageGallery.css';

function ImageGallery({ images }) {
  const scrollContainer = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollContainer;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll step as needed
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll step as needed
    }
  };

  return (
    <div className="news-feed-item-gallery-container">
      {images.length > 0 && (
        <Button variant="secondary" onClick={() => scroll('left')} className="gallery-scroll-btn left">&#9664;</Button>
      )}
      <div className="news-feed-item-gallery" ref={scrollContainer}>
        {Object.values(images).map((src, index) => (
          <ImageItem key={index} src={src} />
        ))}
      </div>
      {images.length > 0 && (
        <Button variant="secondary" onClick={() => scroll('right')} className="gallery-scroll-btn right">&#9654;</Button>
      )}
    </div>
  );
}

export default ImageGallery;