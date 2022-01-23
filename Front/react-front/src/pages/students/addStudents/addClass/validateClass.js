const validate = values => {
  const errors = {};
  if (!values.classModal) {
    errors.classModal = "Please input your class";
    errors.level = "Please select your level"
  }
  return errors;
};

export default validate;
