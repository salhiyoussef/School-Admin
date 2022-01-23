import {connect} from 'react-redux';
import HeaderApp from './Header';
import { setCollapsed } from '../../../redux/actions/layoutAction';

const mapStateToProps = ({layout}) => ({collapsed: layout.collapsed});

const mapDispatchToProps = {
    setCollapsed,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);