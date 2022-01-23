import {connect} from 'react-redux';
import ListStudents from './listStudents';

import { setPaginate, deleteStudent, getClass, getLevel, getSection, setEmailStudentDetail } from './../../../redux/actions/studentAction';

const mapStateToProps = ({layout,students}) => ({layout,students});

const mapDispatchToProps = {
    getClass,
    getLevel,
    getSection,
    setEmailStudentDetail,
    setPaginate,
    deleteStudent,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListStudents);