import React from "react";
import { Row, Button, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";

import FieldInput from "./../../../components/field/Input";
import FieldTextArea from "./../../../components/field/textArea";
import FieldSelect from './../../../components/field/Select';
import { StyledFormBorder } from "../../../components/styled";
import validate from './addNewDriverValidate.js'


function AddNewDrivers({ handleSubmit, submitting, postData, postDriver }) {
  const { loading } = postData;

  function handelSave(value) {
    postDriver(value);
  }

  return (
    <StyledFormBorder onSubmit={handleSubmit(handelSave)}>
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
          <Field
            type="text"
            name="cin"
            component={FieldInput}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "CIN",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="permis"
            component={FieldInput}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "PERMIS",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="gender"
            component={FieldSelect}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "Gender",
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
          <Row gutter={24}>
            <Col xs={24}>
              <Button
                loading={loading}
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledFormBorder>
  );
}

export default reduxForm({
  form: "AddNewDrivers",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddNewDrivers);