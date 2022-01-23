import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Select, Button } from "antd";
import { Field, reduxForm } from "redux-form";
import { get } from 'lodash'

import FieldInput from "../../../../components/field/Input";
import FieldSelect from "../../../../components/field/Select";
import FieldTextArea from "../../../../components/field/textArea";
import validate from "./validatePaiement";

function AddPaiement({layout, handleSubmit, submitting, reset, postPaiement, students }) {

  const {editStudent:{data}}=students
  const {login:{user:{typeAccount}}} = layout
  const idStudent = data!==null ? data._id : []
  const [visible, setVisible] = useState(false);
  function showModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }
  function handelSave(value) {
    const typePaiement = (typeAccount==="Admin") ? true : false  
    const {fraisInscription,fraisTransport,montant}=value;
    const payload = idStudent !== null ? {fraisInscription,fraisTransport,montant,idStudent,typePaiement} : ''
    postPaiement(payload);
    reset()
  }

  return (
    <React.Fragment>
      <Button type="primary" onClick={() => showModal()}> Add Payment </Button>
      <Modal visible={visible} onCancel={closeModal} footer={false} destroyOnClose>
        <form onSubmit={handleSubmit(handelSave)}>
          <h1> Add Payment </h1>
          <Row gutter={24}>
            <Col xs={24}>
              <Field
                type="text"
                name="fraisInscription"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Registration costs",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="text"
                name="fraisTransport"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Transport costs",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
              <Field
                type="text"
                name="montant"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Amount",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={24}>
                <Col xs={24}>
                  <Button
                    // loading={loading}
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
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default reduxForm({
  form: "AddPaiement",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddPaiement);