import { connect } from "react-redux";
import AddNewDrivers from "./addNewDrivers";
import { postDriver } from "../../../redux/actions/driverAction";

const mapStateToProps = ({ drivers }) => ({ postData: drivers.postData });

const mapDispatchToProps = {
  postDriver
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDrivers);
