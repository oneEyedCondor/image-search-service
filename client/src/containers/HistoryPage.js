import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadImages, updateSearchQuery } from "../store/actions/images";
import HistoryPage from "../components/HistoryPage";

const mapStateToProps = ({ history }) => ({
  searchHistory: history.searchHistory,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ loadImages, updateSearchQuery }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
