import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup"
import './LoginForm.css';

function LoginModal({closeModal}) {

  return (
    <div>
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
                closeModal();
            }, 500);
            }}
            validationSchema={ Yup.object().shape({
                email: Yup.string().email().required("Required"),
                password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;

                    return (
                        <form onSubmit={handleSubmit}>

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />

                        <button type="submit">
                            Login
                        </button>

                        </form>
                    );

                    }}

        </Formik>
    </div>
  )
}

export default LoginModal;
