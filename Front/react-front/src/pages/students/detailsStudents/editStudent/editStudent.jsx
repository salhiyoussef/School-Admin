import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Select, Button } from "antd";
import { Field, reduxForm } from "redux-form";
import {get} from 'lodash'

import FieldInput from "../../../../components/field/Input";
import FieldSelect from "../../../../components/field/Select";
import FieldTextArea from "../../../../components/field/textArea";
import validate from "./editStudentValidate";

function EditStudent({ handleSubmit,submitting,putStudent,students,getLevel,getClass,getSection}) {
  const { Option, OptGroup } = Select;
  const { level, classSchool, section } = students;
  const [visible, setVisible] = useState(false);
  const {editStudent: {loading}} = students;

  const totalLevel = get(level.data, "total", 0);
  const dataLevel = get(level.data, "result", []);
  const totalClass = get(classSchool.data, "total", 0);
  const dataClass = get(classSchool.data, "result", []);

  useEffect(() => {
    getLevel();
  }, [getLevel]);

  function handelChangeLevel(id) {
    getClass(id);
  }
  // function handelChangeClass(id) {
  //   getSection(id);
  // }
  function showModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function handelSave(value) {
    putStudent(value);
    setVisible(false);
  }

  return (
    <React.Fragment>
      <span onClick={() => showModal()}> Edit Student </span>
      <Modal visible={visible} onCancel={closeModal} footer={false} destroyOnClose>
        <form onSubmit={handleSubmit(handelSave)}>
          <h1> Edit Student </h1>
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
            <Col xs={24} md={12}>
            <label>
              Level
            </label>
            <Field
              type="text"
              name="level"
              onChange={handelChangeLevel}
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
          <Col xs={24} md={12}>
              <label>
              Class
            </label>
              <Field
                type="text"
                name="classe"
                component={FieldSelect}
                // onChange={handelChangeClass}
                disabled={totalClass === 0}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Class",
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

          {/* <Col xs={24} md={12}>
              <label> 
                Section 
                {(totalClass === 0)?null:<AddSection/>}
                </label>
              <Field
                type="text"
                name="section"
                component={FieldSelect}
                disabled={totalSection === 0}
                parent={{ className: "gx-mb-3" }}
                custom={{
                  placeholder: "Section",
                  style: {
                    marginBottom: "30px"
                  }
                }}
              >
                <OptGroup label={`${totalSection} Result(s) Found`}>
                  {dataSection.map(d => (
                    <Option value={d._id} key={d._id}>
                      {" "}
                      {d.section}{" "}
                    </Option>
                  ))}
                </OptGroup>
              </Field>
          </Col> */}
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
  form: "EditStudent",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(EditStudent);
