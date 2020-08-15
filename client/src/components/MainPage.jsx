import React, { useState, useEffect } from "react";
import Search from "../containers/Search";
import Spinner from "./Spinner";
import ImageItem from "./ImageItem";
import Pagination from "./Pagination";
import ImagePopup from "../containers/ImagePopup";
import "../styles/MainPage.scss";

export default ({ images, favoriteImageIds, loading, selectImage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayImagePopup, changeDisplayImagePopup] = useState(false);
  useEffect(() => setCurrentPage(1), [loading]);

  const imagesPerPage = 10;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const imageClickHandler = (selectedImage) => {
    selectImage(selectedImage);
    changeDisplayImagePopup(true);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Search />

      {loading && <Spinner />}

      <section className="blc-images">
        {currentImages.map((image) => (
          <ImageItem
            key={image.id}
            image={image}
            isFavorite={favoriteImageIds.includes(+image.id)}
            selectImage={imageClickHandler}
          />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={imagesPerPage}
        totalItems={images.length}
        paginate={paginate}
      />

      {displayImagePopup && (
        <ImagePopup closePopup={() => changeDisplayImagePopup(false)} />
      )}
    </>
  );
};
