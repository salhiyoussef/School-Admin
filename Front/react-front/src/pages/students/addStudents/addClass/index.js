import { connect } from "react-redux";
import AddClass from "./addClass";
import {
  getLevel,
  showModalClass,
  closeModalClass,
  postClass
} from "../../../../redux/actions/studentAction";

const mapStateToProps = ({ students , layout }) => ({classSchool: students.classSchool , level: students.level, layout:layout});

const mapDispatchToProps = {
    getLevel,
    showModalClass,
    closeModalClass,
    postClass
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddClass);
