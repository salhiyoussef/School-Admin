import { connect } from "react-redux";
import DetailUsers from "./detailUsers";
import { setEmailUserDetail, deleteUser, setDateUserEdit } from "../../../redux/actions/usersAction";

const mapStateToProps = ({ layout, users }) => ({ layout, users });

const mapDispatchToProps = {
  setEmailUserDetail,
  deleteUser,
  setDateUserEdit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailUsers);
