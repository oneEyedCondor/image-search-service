import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadFavoriteImages } from "../store/actions/images";
import { loadSearchHistory } from "../store/actions/history";
import App from "../components/App";

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ loadFavoriteImages, loadSearchHistory }, dispatch),
});

export default connect(null, mapDispatchToProps)(App);
