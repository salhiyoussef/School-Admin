import { connect } from 'react-redux';
import AddUsers from './addUsers';
import { postNewUser } from "../../../redux/actions/usersAction";

const mapDispatchToProps = {
    postNewUser
}

export default connect(null, mapDispatchToProps)(AddUsers);