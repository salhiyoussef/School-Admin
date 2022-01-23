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
    if (!values.gendre) {
      errors.gendre = "Please input your gendre";
    }
    if (!values.typeAccount) {
      errors.typeAccount = "Please input your typeAccount";
    }
    if (!values.email) {
      errors.email = "Please input your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "error.email";
    }
    if (!values.password) {
      errors.password = "Please input your password";
    } else if(values.password.length < 4 ) {
        errors.password = "Please plus 4 characters"
    }
    return errors;
  };
  
  export default validate;
  