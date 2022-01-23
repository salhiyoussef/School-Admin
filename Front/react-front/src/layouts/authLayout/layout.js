import { connect } from "react-redux";
import AuthLayout from "./authLayout";
import {
  setPageCurrent,
  setSubMenuActive
} from "./../../redux/actions/layoutAction";

const mapStateToProps = ({ layout }) => ({ layout });

const mapDispatchToProps = {
  setPageCurrent,
  setSubMenuActive
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLayout);
