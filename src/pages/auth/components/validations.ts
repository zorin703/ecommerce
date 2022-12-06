import * as yup from "yup";

export const schemaSignUp = yup.object({
    name: yup.string().required('Enter your name'),
    email: yup.string().required('Enter your email').email('This is not email'),
    password: yup.string().required('Enter your password'),
    confirmPassword: yup
        .string()
        .required('Enter your password')
        .oneOf([yup.ref('password')], 'Passwords do not match')
       
})

export const schemaSignIn = yup.object({
    email: yup.string().required('Enter your email').email('This is not email'),
    password: yup.string().required('Enter your password'),


})

export const schemaRestorePassword = yup.object({
    email: yup.string().required('Enter your email').email('This is not email'),
   })

//optional() - может не быть поля

