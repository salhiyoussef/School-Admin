import * as Yup from 'yup';

const validate = Yup.object().shape({
    lastName: Yup.string()
            .required("Last name is required")
            .min(2, "Min")
            .max(120, "Max")
            // .matches(/^[0-9]*$/g, 'This is not a number')  for regex
            .strict(true) // strict khassa tkoun m3aha trim  for hide espace,
            .trim("Not Space"),

    firstName: Yup.string()
            .required("First name is required")
            .min(2, "Min")
            .max(120, "Max")
            .strict(true)
            .trim(),

    email: Yup.string()
        .email("invalide")
        .required('Email is required'),
      
    password: Yup.string()
        .required("Password is Required")
        .min(6, "Min")
        .max(16, "Max")
        .strict(true)
        .trim(),

    confirmPassword: Yup.string()
        .required("Confirm Password is Required")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default validate;