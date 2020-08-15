import React from "react";
import "../styles/ImageItem.scss";

export default ({ image, isFavorite, selectImage }) => (
  <div className="image-item">
    <img
      alt={image.description}
      src={image.url}
      onClick={() => selectImage(image)}
    />
    {isFavorite && <span className="icon-fav">&#9745;</span>}
  </div>
);
