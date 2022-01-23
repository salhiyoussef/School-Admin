const validate = values => {
    const errors = {};
    if (!values.fraisInscription) {
      errors.fraisInscription = "Please input your frais Inscription";
    }
    if (!values.fraisTransport) {
      errors.fraisTransport = "Please input your frais Transport";
    }
    if (!values.montant) {
        errors.montant = "Please input your montant";
      }
    return errors;
};
export default validate;