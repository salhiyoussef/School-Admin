import React from "react";
import { Row, Button, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import LoginRegister from "./../../components/loginRegister";
import FieldInput from "../../components/field/Input";
import FieldSelect from "../../components/field/Select";
import FieldInputPassword from "../../components/field/InputPassword";
import validate from "./registerValidate";
import { StyledFooterRegister, StyledLink } from "./styledRegister";
import { StyledForm } from '../../components/styled'

const Register = ({ handleSubmit, submitting, postNewUsers }) => {

  function saveUSers(value) {
    postNewUsers(value);
  }

  return (
    <LoginRegister title="Register">
      <Col xs={24}>
        <StyledForm onSubmit={handleSubmit(saveUSers)}>
          <Row gutter={24}>
            <Col xs={12}>
              <Field
                type="text"
                name="firstName"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "First Name",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="text"
                name="lastName"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Last Name",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="email"
                name="email"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Email",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="password"
                name="password"
                component={FieldInputPassword}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Password",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={12}>
              <Field
                type="number"
                name="phone"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Phone",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="text"
                name="address"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "address",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>

            <Col xs={12}>
              <Field
                type="text"
                name="gendre"
                component={FieldSelect}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Gendre",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              >
                <Select.Option value="Male"> Male </Select.Option>
                <Select.Option value="Female"> Female </Select.Option>
              </Field>
            </Col>
            <Col xs={12}>
              <Field
                type="text"
                name="typeAccount"
                component={FieldSelect}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Type Account",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              >
                <Select.Option value="Admin"> Admin </Select.Option>
                <Select.Option value="User"> User </Select.Option>
              </Field>
            </Col>
            <StyledFooterRegister xs={24}>
              <Button
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
              >
                Register
              </Button>
            </StyledFooterRegister>
            <StyledLink xs={24}>
              <Link to="/login">Already have an account?</Link>
            </StyledLink>
          </Row>
        </StyledForm>
      </Col>
    </LoginRegister>
  );
};

export default reduxForm({
  form: "Register",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(Register);
