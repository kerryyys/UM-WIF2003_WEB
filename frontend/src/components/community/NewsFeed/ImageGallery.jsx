// ImageGallery.jsx
import React, { useState } from "react";
import ImageItem from "./ImageItem"; // Assuming ImageItem is properly imported
import ImageModal from "./ImageModal"; // Import the new ImageModal component

function ImageGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageArray = Object.values(images); // Convert images object to array

  const handleImageClick = (index) => {
    setModalImages(imageArray);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const displayedImages = imageArray.slice(0, 4);
  const remainingImagesCount = imageArray.length - 4;

  return (
    <div className="tw-w-full tw-overflow-hidden tw-relative tw-flex tw-flex-col tw-items-center tw-my-2.5">
      <div className="tw-w-full tw-flex tw-gap-4">
        {displayedImages.map((src, index) => (
          <div
            key={index}
            className="tw-w-1/4 tw-h-40 tw-relative hover:tw-bg-opacity-75 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <ImageItem src={src} />
            {remainingImagesCount > 0 && index === 3 && (
              <div
                className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-lg hover:tw-bg-opacity-75 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                +{remainingImagesCount}
              </div>
            )}
          </div>
        ))}
      </div>

      <ImageModal
        show={showModal}
        images={modalImages}
        currentIndex={currentIndex}
        onClose={handleClose}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default ImageGallery;
