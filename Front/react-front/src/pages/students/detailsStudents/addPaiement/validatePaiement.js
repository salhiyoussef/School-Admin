const validate = values => {
    const errors = {};
    if (!values.fraisInscription) {
      errors.fraisInscription = "Please input your firs tName";
    }
    if (!values.fraisTransport) {
      errors.fraisTransport = "Please input your last Name";
    }
    if (!values.montant) {
      errors.montant = "Please input your last Name";
    }
    return errors;
  };
  
  export default validate;
  