import { connect } from "react-redux";
import ListUsers from "./listUsers";
import {
  getAllUsers,
  setEmailUserDetail,
  setPaginate
} from "../../../redux/actions/usersAction";

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
  getAllUsers,
  setEmailUserDetail,
  setPaginate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
