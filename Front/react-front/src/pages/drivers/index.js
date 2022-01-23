import {connect} from 'react-redux';

import Drivers from './drivers';
import { getDriverData, setPaginate, deleteDriver, search_driver } from './../../redux/actions/driverAction';

const mapStateToProps = ({layout,drivers}) => ({layout,drivers});

const mapDispatchToProps = {
    getDriverData,
    setPaginate,
    deleteDriver,
    search_driver
}

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);