import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadImages, updateSearchQuery } from "../store/actions/images";
import { addSearchQuery as addSearchQueryToHistory } from "../store/actions/history";
import Search from "../components/Search";

const mapStateToProps = ({ images }) => ({
  searchQuery: images.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { loadImages, updateSearchQuery, addSearchQueryToHistory },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
