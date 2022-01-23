import React from "react";
import { Row, Button, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import FieldInput from "../../components/field/Input";
import FieldInputPassword from "../../components/field/InputPassword";
import LoginRegister from "./../../components/loginRegister";
import { StyledForm } from "../../components/styled";
import { StyledFooterRegister, StyledLink } from "./StyledLogin";
import validate from "./loginValidate";


const Login = ({ handleSubmit, submitting, layout, loginUser }) => {
  const {login:{loading}} = layout;

  function saveLogin(value) {
    loginUser(value);
  }

  return (
    <LoginRegister title="Login" className="login">
      <Col xs={24}>
        <StyledForm
          onSubmit={handleSubmit(saveLogin)}
          style={{ padding: "0px 50px" }}
        >
          <Row gutter={24}>
            <Col xs={24}>
              <Field
                type="email"
                name="email"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Email",
                  style: {
                    marginBottom: "50px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="password"
                name="password"
                component={FieldInputPassword}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Password",
                  style: {
                    marginBottom: "50px"
                  }
                }}
              />
            </Col>
            <StyledFooterRegister xs={24}>
              <Button
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
                // loading={loading}
              >
                Sign in 
              </Button>
            </StyledFooterRegister>
            <StyledLink xs={24}>
              <Link to="/register">Sign up</Link>
            </StyledLink>
          </Row>
        </StyledForm>
      </Col>
    </LoginRegister>
  );
};

export default reduxForm({
  form: "Login",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(Login);
