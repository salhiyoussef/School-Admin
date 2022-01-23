import { connect } from 'react-redux';
import AddTransport from './addTransport';
import { postTransport } from "../../../redux/actions/transportAction";
import { getDriverData} from '../../../redux/actions/driverAction'

const mapStateToProps = ({ transport,drivers }) => ({ transport,drivers });

const mapDispatchToProps = {
    postTransport,
    getDriverData
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransport);
