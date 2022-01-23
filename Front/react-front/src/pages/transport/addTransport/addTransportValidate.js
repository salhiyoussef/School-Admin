const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Please input your firs tName";
    }
    if (!values.lastName) {
      errors.lastName = "Please input your last Name";
    }
    if (!values.phone) {
      errors.phone = "Please input your phone";
    } else if (!/^\d+$/i.test(values.phone)) {
      errors.phone = "error.number";
    }
    if (!values.address) {
      errors.address = "Please input your address";
    }
    if (!values.gender) {
      errors.gender = "Please input your gender";
    }
    if (!values.cin) {
      errors.cin = "Please input your cin";
    }
    if (!values.permis) {
        errors.permis = "Please input your permis";
      }
    if (!values.email) {
      errors.email = "Please input your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "error.email";
    }
    return errors;
  };
  
  export default validate;
  