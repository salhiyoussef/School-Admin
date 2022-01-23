import { connect } from "react-redux";
import AddLevel from "./addLevel";
import {
  showModalLevel,
  closeModalLevel,
  postLevel
} from "../../../../redux/actions/studentAction";

const mapStateToProps = ({ students }) => ({ level: students.level });
const mapDispatchToProps = {
  showModalLevel,
  closeModalLevel,
  postLevel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLevel);
