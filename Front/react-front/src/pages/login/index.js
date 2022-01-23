import { connect } from "react-redux";
import Login from "./login";
import { loginUser } from "../../redux/actions/layoutAction";

const mapStateToProps = ({ layout }) => {
  let initialValues = {};
  const { postUser } = layout;
  if (postUser) {
    initialValues = {
      email: postUser.email
    };
  }
  return { initialValues, layout };
};

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
