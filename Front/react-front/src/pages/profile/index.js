import {connect} from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({layout}) => ({layout});

export default connect(mapStateToProps, null)(Profile)