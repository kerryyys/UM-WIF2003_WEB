// ImageItem.jsx
import React from "react";

function ImageItem({ src }) {
  return (
    <div className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center hover:tw-bg-opacity-75 cursor-pointer">
      <img
        src={src}
        alt="gallery"
        className="tw-w-full tw-h-full tw-object-cover tw-rounded"
      />
    </div>
  );
}

export default ImageItem;
