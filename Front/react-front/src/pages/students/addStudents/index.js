import { connect } from "react-redux";
import AddStudents from "./addStudents";
import {
  getLevel,
  resetFormStudent,
  getClass,
  getSection,
  postStudents,
} from "../../../redux/actions/studentAction";

const mapStateToProps = ({ students, layout}) => {
  const { level: { dataNewLevel }} = students;
  let initialValues = {};
  
  if (dataNewLevel) {
    initialValues = {
      level: dataNewLevel.level
    };
  }
  return { initialValues, students, layout };
};

const mapDispatchToProps = {
  getLevel,
  resetFormStudent,
  getClass,
  getSection,
  postStudents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudents);
