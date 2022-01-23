import React from "react";
import { Input } from "antd";
import { ErrorMessage } from "formik";

const styles = {
  hasError: {
    color: "red",
    border: "1px solid red"
  },
  errorMessage: {
    color: "red",
    position: "relative",
    bottom: "10px"
  }
};

export default function FieldInputFormik({ type, field, form, ...props }) {
  const { errors, touched } = form;

  return (
    <div>
      <Input
        {...field}
        {...props}
        type={type}
        className="input-formik"
        style={
          touched[field.name] && errors[field.name] ? styles.hasError : null
        }
      />

      {/* S Y N T A X E   N  1 */}
      {/* {touched[field.name] && errors[field.name] && (
        <p style={styles.errorMessage}> {errors[field.name]} </p>
      )} */}

      {/* S Y N T A X E   N  2 */}
      <ErrorMessage
        component="span"
        style={styles.errorMessage}
        name={field.name}
      />
    </div>
  );
}
