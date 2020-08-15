import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectImage } from "../store/actions/images";
import MainPage from "../components/MainPage";

const mapStateToProps = ({ images }) => ({
  images: images.images,
  favoriteImageIds: images.favoriteImages.map((i) => +i.id),
  loading: images.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ selectImage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
