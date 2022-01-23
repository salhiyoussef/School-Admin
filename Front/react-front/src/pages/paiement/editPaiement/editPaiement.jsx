import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Select, Button } from "antd";
import { Field, reduxForm } from "redux-form";
import FieldInput from "../../../components/field/Input";
import FieldSelect from "../../../components/field/Select";
import FieldTextArea from "../../../components/field/textArea";
import validate from "./editPaiementValidate";

function EditPaiement({ handleSubmit,submitting,putPaiement,paiement}) {
  const {dataEditePaiement:{data,loading}} = paiement;
  const {idStudent} = data!==null ? data : '';
  const { Option, OptGroup } = Select;
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function handelSave(value) {
    putPaiement(value);
    setVisible(false);
  }

  return (
    <React.Fragment>
      <span onClick={() => showModal()}> Edit Paiement </span>
      <Modal visible={visible} onCancel={closeModal} footer={false} destroyOnClose>
        <form onSubmit={handleSubmit(handelSave)}>
          <h1> Edit Paiement </h1>
          <Row gutter={24}>
            <Col xs={24}>
              <p style={{fontSize:"20px"}}> Name Student : <span > {`${idStudent}`} </span> </p>
            </Col>
            <Col xs={24}>
              <label>Frais Inscription</label>
              <Field
                type="text"
                name="fraisInscription"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Frais Inscription",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
            <label>Frais Transport</label>
              <Field
                type="text"
                name="fraisTransport"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Frais Transport",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              />
            </Col>
            <Col xs={24}>
            <label>Montant</label>
              <Field
                type="text"
                name="montant"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Montant",
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
                // loading= {loading}
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
  form: "EditPaiement",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(EditPaiement);
