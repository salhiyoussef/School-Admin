import React from "react";
import { Row, Col, Modal, Button } from "antd";
import { Field, reduxForm } from "redux-form";

import { StyledIconPlus } from "../styledAddStudent";
import FieldInput from "../../../../components/field/Input";
import { StyledFormBorder } from "../../../../components/styled";
import validate from "./validateLevel";

function AddLevel({
  handleSubmit,
  submitting,
  showModalLevel,
  closeModalLevel,
  level,
  postLevel
}) {
  const { visible, loading } = level;

  function handelSaveLevel(value) {
    const payload = {
      level: value.levelModal
    };
    postLevel(payload);
  }

  return (
    <React.Fragment>
      <StyledIconPlus onClick={showModalLevel}> + </StyledIconPlus>
      <Modal
        visible={visible}
        onCancel={closeModalLevel}
        footer={false}
        destroyOnClose
      >
        <StyledFormBorder>
          <Row gutter={24}>
            <h2> Add New Level </h2>
            <Col xs={24}>
              <label> Level </label>
              <Field
                type="text"
                name="levelModal"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Level"
                }}
              />
            </Col>
            <Col xs={24}>
              <Row gutter={24} style={{ marginTop: "25px" }}>
                <Col xs={24} md={12}>
                  <Button
                    size="large"
                    icon="save"
                    htmlType="submit"
                    type="primary"
                    // loading={loading}
                    disabled={submitting}
                    onClick={handleSubmit(handelSaveLevel)}
                  >
                    Save
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    size="large"
                    icon="rest"
                    type="danger"
                    onClick={closeModalLevel}
                  >
                    Reset
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </StyledFormBorder>
      </Modal>
    </React.Fragment>
  );
}

export default reduxForm({
  form: "AddLevel",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddLevel);
