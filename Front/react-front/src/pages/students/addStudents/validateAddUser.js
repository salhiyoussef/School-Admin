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
  if (!values.classe) {
    errors.classe = "Please input your classe";
  }
  if (!values.gender) {
    errors.gender = "Please input your gendre";
  }
  if (!values.fatherName) {
    errors.fatherName = "Please input your father Name";
  }
  if (!values.motherName) {
    errors.motherName = "Please input your mother Name";
  }
  if (!values.phoneParent) {
    errors.phoneParent = "Please input your phone";
  }
  if (!values.addressParent) {
    errors.addressParent = "Please input your address";
  }
  if (!values.jobFather) {
    errors.jobFather = "Please input your job Father";
  }
  if (!values.emailParent) {
    errors.emailParent = "Please input your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.emailParent = "email not valid";
  }
  if (!values.email) {
    errors.email = "Please input your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "email not valid";
  }
  return errors;
};

export default validate;
