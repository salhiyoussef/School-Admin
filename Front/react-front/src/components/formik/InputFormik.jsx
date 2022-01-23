import React from "react";

const styles = {
  hasError: {
    color: "red",
    border: "1px solid red"
  },
  errorMessage: {
    color: "red",
    margin: "-8px 0 8px 0",
  }
};

export default function InputFormik({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  meta: {errors, touched}
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={touched[name] && errors[name] ? styles.hasError : null}
        className="input-formik"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors[name] && (
        <p style={styles.errorMessage}> {errors[name]} </p>
      )}
    </div>
  );
}
