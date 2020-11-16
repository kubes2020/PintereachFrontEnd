import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import Schema from '../validation/LoginForm_Schema'
import * as yup from 'yup'
//import style from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'

function Login (props) {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        Schema.isValid(user).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [user])

    // const handleSubmit = e =>{
    //     e.preventDefault()
    // }
    // Axios HERE
    const validateChange = e => {
        yup
            .reach(Schema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const inputChange = e => {
        e.persist()

        const newUserData = {
            ...user,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        validateChange(e)
        setUser(newUserData)
    }

    return (

        <form className='login-form'>
            <h1 className='text-center'>
                <span className='font-weight-bold'>Pintereach</span>
            </h1>

            <h2 className='text-center'>LOGIN</h2>

            <div className='form-group'>
                <label for='email'>Email:</label>
                <input
                    name='email'
                    type='email'
                    class='form-control'
                    value={user.email}
                    onChange={inputChange}
                    placeholder='Enter your Email address' />

            </div>

            <div className='form-group'>
                <label for='password'>Password:</label>
                <input
                    name='password'
                    type='password'
                    class='form-control'
                    value={user.password}
                    onChange={inputChange}
                    placeholder='Enter your Password' />
            </div>


            <button type='button' className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' disabled={buttonDisabled}>Log in</button>

            <div className='text-center pt3'>Need to sign up? Click Register Below</div>

            <button type='button' className='btn btn-primary btn-lg btn-block mt-3 mb-3 '>Register</button>



        </form>


    )

}

export default Login

