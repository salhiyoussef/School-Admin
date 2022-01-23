import { connect } from "react-redux";
import DetailsStudents from "./detailsStudents";
import { setEmailStudentDetail , deleteStudent , setDateStudentEdit } from "../../../redux/actions/studentAction";

const mapStateToProps = ({ layout, students }) => ({ layout, students });

const mapDispatchToProps = {
    setEmailStudentDetail,
    setDateStudentEdit,
    deleteStudent
// getAllStudents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsStudents);
