import {connect} from 'react-redux';
import Register from './register';
import { postNewUsers } from '../../redux/actions/layoutAction';

const mapDispatchToProps = {
    postNewUsers,
}

export default connect(null, mapDispatchToProps)(Register)