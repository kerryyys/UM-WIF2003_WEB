import React from "react";

function ImageItem({ src }) {
  return (
    <div className="image-item">
      <img
        src={src}
        alt="gallery"
        className="img-fluid rounded mx-auto d-block gallery-img"
      ></img>
    </div>
  );
}

export default ImageItem;
