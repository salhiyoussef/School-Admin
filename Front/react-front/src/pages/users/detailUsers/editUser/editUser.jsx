import React, { useState } from "react";
import { Modal, Row, Col, Select, Button } from "antd";
import { Field, reduxForm } from "redux-form";

import FieldInput from "../../../../components/field/Input";
import FieldSelect from "../../../../components/field/Select";
import FieldTextArea from "../../../../components/field/textArea";
import validate from "./editUserValidate";

function EditUser({ handleSubmit, submitting, putUser, users }) {
  const [visible, setVisible] = useState(false);
  const {editUser: {loading}} = users;

  function showModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function handelSave(value) {
    putUser(value);
    setVisible(false);
  }

  return (
    <React.Fragment>
      <span onClick={() => showModal()}> Edit </span>
      <Modal visible={visible} onCancel={closeModal} footer={false} destroyOnClose>
        <form onSubmit={handleSubmit(handelSave)}>
          <h1> Edit User </h1>
          <Row gutter={24}>
            <Col xs={24}>
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
            <Col xs={24}>
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
            <Col xs={24}>
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
            <Col xs={24}>
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
            <Col xs={24}>
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
            <Col xs={24}>
              <Button
                size="large"
                icon="save"
                htmlType="submit"
                type="primary"
                disabled={submitting}
                loading= {loading}
              >
                Update
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default reduxForm({
  form: "EditUser",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(EditUser);
