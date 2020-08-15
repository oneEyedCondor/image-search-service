import React from "react";
import "../styles/ImagePopup.scss";

export default (props) => {
  const {
    image,
    imageIsFavorite,
    prevImage,
    nextImage,
    closePopup,
    selectImage,
    likeImage,
  } = props;

  const buttonHandler = (elem) => {
    const btnClass = elem.className.replace("image-popup-btn-", "");
    switch (btnClass) {
      case "like":
        likeImage(image);
        break;
      case "prev":
        selectImage(prevImage);
        break;
      case "next":
        selectImage(nextImage);
        break;
      default:
        return;
    }
  };

  const clickHandler = (elem) => {
    if (["DIV", "CONTENT"].includes(elem.tagName)) {
      closePopup();
    }

    if (elem.tagName === "BUTTON") {
      buttonHandler(elem);
    }
  };

  return (
    <div className="image-popup" onClick={(e) => clickHandler(e.target)}>
      <content>
        <img
          className="image-popup-img"
          src={image.url}
          alt={image.description}
        />
        {imageIsFavorite ? (
          <span className="image-popup-icon-like">&#10004;</span>
        ) : (
          <button className="image-popup-btn-like">&#10004;</button>
        )}
        <button className="image-popup-btn-prev">&#10094;</button>
        <button className="image-popup-btn-next">&#10095;</button>
      </content>
    </div>
  );
};
