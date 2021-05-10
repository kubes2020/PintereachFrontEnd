import React, { useEffect, useState } from "react";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/login.css";
import Axios from "axios";
import { Link } from "react-router-dom";

const formSchema = yup.object().shape({
    email: yup.string().email("Must be a valid email"),
    password: yup.string().min(4, "Must be at least 4 characters long"),
});

const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [user]);

    const validate = (event) => {
        let value = event.target.value;

        yup.reach(formSchema, event.target.name)
            .validate(value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [event.target.name]: "",
                });
            })
            .catch((error) => {
                setErrors({
                    ...errors,
                    [event.target.name]: error.errors[0],
                });
            });
    };

    const inputChange = (event) => {
        event.persist();

        validate(event);

        let value = event.target.value;

        setUser({
            ...user,
            [event.target.name]: value,
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();

        Axios.post(
            "https://pintereacharticles.herokuapp.com/api/auth/register",
            user
        )
            .then((res) => {
                props.history.push("/login");
                alert("Registration Complete, Please Login.");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [buttonDisabled, setButtonDisabled] = useState(true);

    return (
        <form className="login-form" onSubmit={formSubmit}>
            <h1 className="text-center">
                <span className="font-weight-bold">Pintereach</span>
            </h1>

            <h2 className="text-center">Register</h2>

            <div className="form-group">
                <label htmlFor="emailId">Email:</label>
                <input
                    name="email"
                    type="email"
                    id="emailId"
                    className="form-control"
                    placeholder="Create an email"
                    value={user.email}
                    onChange={inputChange}
                />
                {errors.email.length > 0 ? (
                    <p className="error"> {errors.email} </p>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="passwordId">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="passwordId"
                    className="form-control"
                    placeholder="Create an password"
                    value={user.password}
                    onChange={inputChange}
                />

                {errors.password.length > 0 ? (
                    <p className="error"> {errors.password} </p>
                ) : null}
            </div>

            <button
                disabled={buttonDisabled}
                className="btn btn-primary btn-lg btn-block mt-3 mb-3"
            >
                {" "}
                Confirm Registration{" "}
            </button>

            <div className="text-center pt3">Have an account?</div>

            <Link
                className="btn btn-primary btn-lg btn-block mt-3 mb-3 "
                to="/login"
            >
                Login
            </Link>
        </form>
    );
};

export default Register;
