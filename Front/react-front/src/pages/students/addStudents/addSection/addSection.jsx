import React ,{ useEffect } from "react";
import { Row, Col, Modal, Button, Select} from "antd";
import { Field, reduxForm } from "redux-form";
import { get } from "lodash";

import { StyledIconPlus } from "../styledAddStudent";
import FieldSelect from "../../../../components/field/Select";
import FieldInput from "../../../../components/field/Input";
import { StyledFormBorder } from "../../../../components/styled";
import validate from "./validateSection";

function AddSection({
  handleSubmit,
  submitting,
  showModalSection,
  closeModalSection,
  section,
  classSchool,
  postSection,
  layout
}) {
  const { Option, OptGroup } = Select;
  const { visible, loading } = section;
  const totalClass = get(classSchool.data, "total", 0);
  const dataClass = get(classSchool.data, "result", []);

  function handelSaveSection(value) {
    const {login : {user:{_id}}} = layout
    const payload = {
        section: value.sectionModal,
        userId : _id,
        classId: value.sectionClass,
    };
    // console.log(value);
    postSection(payload);
  }

  return (
    <React.Fragment>
      <StyledIconPlus onClick={showModalSection}> + </StyledIconPlus>
      <Modal
        visible={visible}
        onCancel={closeModalSection}
        footer={false}
        destroyOnClose
      >
        <StyledFormBorder>
          <Row gutter={24}>
            <h2> Add New Section </h2>
            <Col xs={24} md={12}>
            <label>
              Section de Class
            </label>
            <Field
              type="text"
              name="sectionClass"
              component={FieldSelect}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "class",
                style: {
                  marginBottom: "30px"
                }
              }}
            >
              <OptGroup label={`${totalClass} Result(s) Found`}>
                {dataClass.map(d => (
                  <Option value={d._id} key={d._id}>
                    {d.classLevel}
                  </Option>
                ))}
              </OptGroup>
            </Field>
          </Col>
            <Col xs={24}>
              <label> Section </label>
              <Field
                type="text"
                name="sectionModal"
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
                    onClick={handleSubmit(handelSaveSection)}
                  >
                    Save
                  </Button>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    size="large"
                    icon="rest"
                    type="danger"
                    onClick={closeModalSection}
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
  form: "AddSection",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddSection);
