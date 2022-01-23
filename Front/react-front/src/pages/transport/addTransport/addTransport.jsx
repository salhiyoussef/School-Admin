import React, { useEffect } from 'react';
import { Row, Button, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";

import FieldInput from "./../../../components/field/Input";
import FieldTextArea from "./../../../components/field/textArea";
import FieldSelect from './../../../components/field/Select';
import { StyledFormBorder } from "../../../components/styled";
import validate from './addTransportValidate.js'
import { get } from "lodash";


function AddTransport({ handleSubmit, submitting, reset, transport, drivers, getDriverData, postTransport }) {

  const { postData: { loading } } = transport;
  // const { loading, data, offset } = drivers;
  const { Option, OptGroup } = Select;

  useEffect(() => {
    getDriverData();
  }, []);

  const totale = get(drivers.data, "total", 0);
  const dataDriver = get(drivers.data, "result", []);

  function handelSave(value) {
    postTransport(value);
    reset()
  }

  return (
    <StyledFormBorder onSubmit={handleSubmit(handelSave)}>
      <Row gutter={24}>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="routeName"
            component={FieldInput}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "Route Name",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="vehiculeNumber"
            component={FieldInput}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "Vehicule Number",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="licenseNumber"
            component={FieldInput}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "License Number",
              style: {
                marginBottom: "30px"
              }
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <Field
            type="text"
            name="driverId"
            component={FieldSelect}
            parent={{ className: "gx-mb-3" }}
            custom={{
              placeholder: "Driver",
              style: {
                marginBottom: "30px"
              }
            }}
          >
            <OptGroup label={`${totale} Result(s) Found`}>
              {dataDriver.map(d => (
                <Option value={d._id} key={d._id}>
                  {d.cin}
                </Option>
              ))}
            </OptGroup>
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
        <Col xs={24} md={8}>
          <Row gutter={24}>
              <Col xs={24}>
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
  form: "AddTransport",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddTransport);
