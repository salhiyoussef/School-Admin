import {connect} from 'react-redux';
import Users from './users';

const mapStateToProps = ({layout}) => ({layout});

export default connect(mapStateToProps, null)(Users);