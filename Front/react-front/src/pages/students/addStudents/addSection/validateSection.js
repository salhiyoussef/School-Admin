const validate = values => {
  const errors = {};
  if (!values.sectionModal) {
    errors.sectionModal = "Please input your section";
    errors.sectionClass = "Please select your class"
  }
  return errors;
};

export default validate;
