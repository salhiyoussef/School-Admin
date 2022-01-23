import { connect } from "react-redux";
import AddSection from "./addSection";
import {
  getClass,
  showModalSection,
  closeModalSection,
  postSection
} from "../../../../redux/actions/studentAction";

const mapStateToProps = ({ students , layout }) => ({section: students.section , classSchool: students.classSchool, layout:layout});

const mapDispatchToProps = {
    getClass,
    showModalSection,
    closeModalSection,
    postSection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSection);
