import {connect} from 'react-redux';
import Profile from './Profile';
import {logoutUser} from '../../../../redux/actions/layoutAction';

const mapStateToProps = ({layout}) => ({layout});

const mapDispatchToProps = {
    logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);