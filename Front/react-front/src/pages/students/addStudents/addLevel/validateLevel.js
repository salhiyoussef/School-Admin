const validate = values => {
  const errors = {};
  if (!values.levelModal) {
    errors.levelModal = "Please input your Level";
  }
  return errors;
};

export default validate;
