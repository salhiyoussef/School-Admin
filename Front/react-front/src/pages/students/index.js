import {connect} from 'react-redux';
import Student from './student';
import { getAllStudents} from '../../redux/actions/studentAction'

const mapStateToProps = ({layout,students}) => ({layout,students});
const mapDispatchToProps = {
    // setEmailStudentDetail
    getAllStudents
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);