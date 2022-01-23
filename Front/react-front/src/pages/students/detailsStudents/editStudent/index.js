import { connect } from "react-redux";
import EditStudent from "./editStudent";
import { putStudent, getLevel, getClass } from "../../../../redux/actions/studentAction";

const mapStateToProps = ({students}) => {
    let initialValues = {};
    const {detail: {student:{result}}} = students;
    console.log(result);
    if(result) {
        initialValues = {
            address: result.address,
            classe:result.classe,
            email: result.email,
            firstName: result.firstName,
            gendre: result.gendre,
            lastName: result.lastName,
            level:result.level,
            phone: result.phone,
        };
    }
    return { initialValues, students };
}

const mapDispatchToProps = {
    putStudent,
    getLevel,
    getClass,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStudent);