import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'

const formSchema = yup.object().shape({
    email: yup.string().email('Must be a valid email'),
    password: yup.string().min(4, 'Must be at least 4 characters long')
})

const Register = () => {

    const [ newUsers, setNewUsers ] = useState([])

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        formSchema.isValid(user)
            .then(valid => {
                setButtonDisabled(!valid)
            })
    },[user])

    const validate = event => {

        let value  = event.target.value;

        yup
            .reach( formSchema, event.target.name )
            .validate( value )
            .then( valid => {
                setErrors({
                    ...errors, [ event.target.name ] : ''
                })                
            })
            .catch( error => {
                setErrors({
                    ...errors, [ event.target.name ] : error.errors[0]
                })
            })
    }

    const inputChange = event =>  {

        event.persist();

        validate(event);

        let value = event.target.value

        setUser({
            ...user, [ event.target.name ] : value
        })

    }

    const formSubmit = event => {

        event.preventDefault();

        setNewUsers([ ...newUsers, user ]);

        setUser({

            email: '',
            password: '',

        })
    }

    const [ buttonDisabled, setButtonDisabled ] = useState(true)

    return(

        <form 
            className='login-form'
            onSubmit = {formSubmit}
        >

            <h1 className=' text-center'>
                <span className='font-weight-bold' >Pintereach</span>
            </h1>

            <h2 className='text-center'>Register</h2>

            <div className='form-group' > 
                <label for='email'>
                    Email:
                    <input
                    name='email'
                    type='email'
                    class='form-control'
                        placeholder = 'Create an email'
                        value = {user.email}
                        onChange = {inputChange}
                    />

                    { errors.email.length > 0 ? ( <p className='error' > { errors.email } </p> ) : null  }

                </label>
            </div>

            <div className = 'form-group'>
                <label for = 'password'>
                    Password:
                    <input
                        type = 'password'
                        name = 'password'
                        class = 'form-control text-center'
                        placeholder = 'Create an password'
                        value = {user.password}
                        onChange = {inputChange}
                    />

                    { errors.password.length > 0 ? ( <p className='error' > { errors.password } </p> ) : null  }

                </label>
            </div>

            <button disabled = {buttonDisabled} className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' > Confirm Registration </button>

        </form>

    )
}

export default Register;