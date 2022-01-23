import React ,{ useEffect } from "react";
import { Row, Col, Modal, Button, Select} from "antd";
import { Field, reduxForm } from "redux-form";
import { get } from "lodash";

import { StyledIconPlus } from "../styledAddStudent";
import FieldSelect from "../../../../components/field/Select";
import FieldInput from "../../../../components/field/Input";
import { StyledFormBorder } from "../../../../components/styled";
import validate from "./validateClass";

function AddClass({
  handleSubmit,
  submitting,
  showModalClass,
  closeModalClass,
  classSchool,
  layout,
  level,
  postClass
}) {
  const { Option, OptGroup } = Select;
  const { visible, loading } = classSchool;
  const totalLevel = get(level.data, "total", 0);
  const dataLevel = get(level.data, "result", []);


  function handelSaveClass(value) {
    const {login : {user:{_id}}} = layout
    const payload = {
      classLevel: value.classModal,
      userId : _id,
      schoolLevelId: value.levelClass,
    };
    
    postClass(payload);
  }

  return (
    <React.Fragment>
      <StyledIconPlus onClick={showModalClass}> + </StyledIconPlus>
      <Modal
        visible={visible}
        onCancel={closeModalClass}
        footer={false}
        destroyOnClose
      >
        <StyledFormBorder>
          <Row gutter={24}>
            <h2> Add New Class </h2>
            <Col xs={24} md={12}>
            <label>
              Level
            </label>
            <Field
              type="text"
              name="levelClass"
              component={FieldSelect}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Level",
                style: {
                  marginBottom: "30px"
                }
              }}
            >
              <OptGroup label={`${totalLevel} Result(s) Found`}>
                {dataLevel.map(d => (
                  <Option value={d._id} key={d._id}>
                    {d.level}
                  </Option>
                ))}
              </OptGroup>
            </Field>
          </Col>
            <Col xs={24}>
              <label> Class </label>
              <Field
                type="text"
                name="classModal"
                component={FieldInput}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "class"
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
                    onClick={handleSubmit(handelSaveClass)}
                  >
                    Save
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    size="large"
                    icon="rest"
                    type="danger"
                    onClick={closeModalClass}
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
  form: "AddClass",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddClass);
