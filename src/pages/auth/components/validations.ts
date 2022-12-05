import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Enter your email').optional(),
    email: yup.string().required('Enter your email').email('This is not email'),
    password: yup.string().required('Enter your password').optional(),
    confirmPassword: yup
        .string()
        .required('Enter your password')
        //.oneOf([yup.ref('password')], 'Пароли не совпадают')
        .optional()
})

//optional() - может не быть поля

