import React, { useEffect } from "react";
import { Row, Button, Col, Select, Tooltip } from "antd";
import { Field, reduxForm } from "redux-form";
import { get } from "lodash";

import CardApp from "../../../components/card";
import FieldInput from "../../../components/field/Input";
import FieldTextArea from "../../../components/field/textArea";
import FieldSelect from "../../../components/field/Select";
import { StyledFormBorder } from "../../../components/styled";
import validate from "./validateAddUser";
import AddLevel from "./addLevel";
import AddClass from "./addClass";
import AddSection from "./addSection";

function AddStudents({
  handleSubmit,
  submitting,
  reset,
  students,
  getLevel,
  resetFormStudent,
  getClass,
  getSection,
  postStudents,
  layout
}) {
  const { Option, OptGroup } = Select;
  const { level, classSchool, section } = students;
  // console.log(layout);
  const {login:{user:{typeAccount}}}=layout;

  // G E T   D A T A   A N D   T O T A L   L E V E L
  const totalLevel = get(level.data, "total", 0);
  const dataLevel = get(level.data, "result", []);

  // G E T   D A T A   A N D   T O T A L   C L A S S
  const totalClass = get(classSchool.data, "total", 0);
  const dataClass = get(classSchool.data, "result", []);

  // G E T   D A T A   A N D   T O T A L   S E C T I O N
  const totalSection = get(section.data, "total", 0);
  const dataSection = get(section.data, "result", []);

  useEffect(() => {
    getLevel();
  }, [getLevel]);

  function handelChangeLevel(id) {
    getClass(id);
  }

  function handelChangeClass(id) {
    getSection(id);
  }

  function restForm() {
    resetFormStudent();
    reset();
  }

  function handelSave(value) {
    const {
      address,
      addressParent,
      level,
      classe,
      email,
      emailParent,
      fatherName,
      firstName,
      gender,
      jobFather,
      jobMother,
      lastName,
      motherName,
      phone,
      phoneParent,
      section
    } = value;
    const payload = {
      address,
      level,
      classe,
      email,
      firstName,
      gender,
      lastName,
      phone,
      section,
      parents: {
        addressParent,
        emailParent,
        fatherName,
        jobFather,
        jobMother,
        motherName,
        phoneParent
      }
    };
    postStudents(payload)
  }

  return (
    <CardApp>
      <StyledFormBorder onSubmit={handleSubmit(handelSave)}>
        <Row gutter={24}>
          <h1> Student Information </h1>
          <Col xs={24} md={12}>
            <label> First Name </label>
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
          <Col xs={24} md={12}>
            <label> Last Name </label>
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
          <Col xs={24} md={12}>
            <label> Phone </label>
            <Field
              type="text"
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
          <Col xs={24} md={12}>
            <label> Email </label>
            <Field
              type="email"
              name="email"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "email",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Gender </label>
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
          <Col xs={24} md={12}>
            <label> Address </label>
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
          {(typeAccount === "Admin" && typeAccount === "Secretary" ) ? (
            <label>
              Level
              <AddLevel />
            </label>
            ) : null}
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
            <Tooltip
              title={
                totalClass === 0
                  ? "thank you for selecting firstly the level"
                  : null
              }
            >
             {(typeAccount === "Admin" && typeAccount === "Secretary" ) ? (
              <label>
              Class
              <AddClass/>
            </label>
            ) : null}
              <Field
                type="text"
                name="classe"
                component={FieldSelect}
                onChange={handelChangeClass}
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
            </Tooltip>
          </Col>
          <Col xs={24} md={12}>
            <Tooltip
              title={
                totalSection === 0
                  ? "thank you for selecting firstly the level and class"
                  : null
              }
            >
              {(typeAccount === "Admin" && typeAccount === "Secretary" ) ? (
                  <label> 
                    Section 
                    {(totalClass === 0)?null:<AddSection/>}
                  </label>
                ) : null}
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
            </Tooltip>
          </Col>
        </Row>
        <Row gutter={24}>
          <h1> Parents Information </h1>
          <Col xs={24} md={12}>
            <label> Father Name </label>
            <Field
              type="text"
              name="fatherName"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Father Name",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Mother Name </label>
            <Field
              type="text"
              name="motherName"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Mother Name",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Phone </label>
            <Field
              type="text"
              name="phoneParent"
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
          <Col xs={24} md={12}>
            <label> Email </label>
            <Field
              type="email"
              name="emailParent"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "email",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Adress </label>
            <Field
              type="text"
              name="addressParent"
              component={FieldTextArea}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Address",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Job Father </label>
            <Field
              type="text"
              name="jobFather"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Job Father",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <label> Job Mother </label>
            <Field
              type="text"
              name="jobMother"
              component={FieldInput}
              parent={{ className: "gx-mb-3" }}
              custom={{
                placeholder: "Job Mother",
                style: {
                  marginBottom: "30px"
                }
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={24} style={{ marginTop: "25px" }}>
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
                <Button
                  size="large"
                  icon="rest"
                  type="danger"
                  onClick={restForm}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </StyledFormBorder>
    </CardApp>
  );
}

export default reduxForm({
  form: "AddStudents",
  validate,
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: true
})(AddStudents);
