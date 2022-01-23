import React from "react";
import { Formik, Field } from "formik";
import validate from "./validate";
import FieldInputFormik from "../../components/formik/fieldInputFormik";

export default function FormikApp() {
  const initialValues = {
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  function _handelSubmitFormik(values, actions) {
    console.log("_handelSubmitFormik values", values);
    console.log("_handelSubmitFormik actions", actions);
    const { resetForm } = actions;
    resetForm();
  }

  return (
    <div className="container-formik">
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, actions) => _handelSubmitFormik(values, actions)}
      >
        {({
          handleSubmit,
          isSubmitting
        }) => (
          <form className="form-formik" onSubmit={handleSubmit}>
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              component={FieldInputFormik}
            />
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              component={FieldInputFormik}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={FieldInputFormik}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={FieldInputFormik}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              component={FieldInputFormik}
            />
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
