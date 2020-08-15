import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectImage, likeImage } from "../store/actions/images";
import ImagePopup from "../components/ImagePopup";

const searchImageById = ({ images, selectedImage }) => {
  return images.find((i) => i.id === selectedImage.id);
};

const searchPrevImage = ({ images, selectedImage }) => {
  const idx = images.findIndex((i) => i.id === selectedImage.id);
  if (idx !== -1) {
    return idx === 0 ? images[images.length - 1] : images[idx - 1];
  }
};

const searchNextImage = ({ images, selectedImage }) => {
  const idx = images.findIndex((i) => i.id === selectedImage.id);
  if (idx !== -1) {
    return idx === images.length - 1 ? images[0] : images[idx + 1];
  }
};

const mapStateToProps = ({ images }, { closePopup }) => {
  const currentImage = searchImageById(images);
  return {
    image: currentImage,
    imageIsFavorite: images.favoriteImages.some((i) => i.id == currentImage.id),
    prevImage: searchPrevImage(images),
    nextImage: searchNextImage(images),
    closePopup,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ selectImage, likeImage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagePopup);
