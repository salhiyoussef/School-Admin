import { connect } from 'react-redux';
import Transport from './transport';
import { getAllTransport, deleteTransport } from '../../redux/actions/transportAction';

const mapStateToProps = ({transport}) => ({transport});

const mapDispatchToProps = {
    getAllTransport,
    deleteTransport,
}

export default connect(mapStateToProps, mapDispatchToProps)(Transport);