import * as yup from 'yup'

const Schema = yup.object().shape ({
    email: yup
        .string()
        .required('Email is required for login'),

    password: yup
        .string()
        .required('Password is required')
        .min(4, 'Password must be more than 3 charecters')

    
})

export default Schema