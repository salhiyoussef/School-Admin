import { connect } from "react-redux";
import EditUser from "./editUser";
import { putUser } from "../../../../redux/actions/usersAction";

const mapStateToProps = ({users}) => {
    let initialValues = {};
    const {editUser: {data}} = users;
    if(data) {
        initialValues = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            typeAccount: data.typeAccount,
            gendre: data.gendre,
            phone: data.phone,
            address: data.address
        };
    }
    return { initialValues, users };
}

const mapDispatchToProps = {
    putUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);