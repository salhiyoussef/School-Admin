import { connect } from "react-redux";
import SideBar from "./SideBar";
import { setPageCurrent, setSubMenuActive } from "./../../../redux/actions/layoutAction";

const mapStateToProps = ({ layout }) => ({ layout });

const mapDispatchToProps = {
  setPageCurrent,
  setSubMenuActive
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
