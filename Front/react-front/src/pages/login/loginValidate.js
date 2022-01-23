const validate = values => {
    const errors = {};
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
  