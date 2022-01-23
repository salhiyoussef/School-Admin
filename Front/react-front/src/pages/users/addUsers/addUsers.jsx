import React from "react";
import { Row, Button, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";

import FieldInput from "../../../components/field/Input";
import FieldSelect from "../../../components/field/Select";
import FieldInputPassword from "../../../components/field/InputPassword";
import FieldTextArea from "../../../components/field/textArea";
import validate from './addUserValidate';
import { StyledFormBorder } from "../../../components/styled";

function AddUsers({ handleSubmit, submitting, reset, postNewUser }) {
  function saveUsers(value) {
    postNewUser(value);
    reset();
  }
  return (
    <StyledFormBorder onSubmit={handleSubmit(saveUsers)}>
      <Row gutter={24}>
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
        <Col xs={24} md={8}>
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
            <Select.Option value="Secretary"> Secretary </Select.Option>
            <Select.Option value="User"> User </Select.Option>
          </Field>
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="address"
            component={FieldTextArea}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "address",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Button
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
              >
                Save
              </Button>
            </Col>
            <Col xs={24} md={12}>
              <Button size="large" icon="rest" type="danger" onClick={() => reset()}>
                Reset
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledFormBorder>
  );
}

export default reduxForm({
  form: "AddUsers",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddUsers);
