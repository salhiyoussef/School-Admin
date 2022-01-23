import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GuestLayout from './guestLayout';
import { restLayout } from './../../redux/actions/layoutAction';

const mapStateToProps = ({_persist}) => ({_persist});

export default withRouter(connect(null, {restLayout})(GuestLayout));