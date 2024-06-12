import React from 'react';
import { Formik, Form, Field } from 'formik';

const SignUp = () => {
    const initialValue = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: new Date()
    }

    const onSubmit = (values, actions) => {
        console.log(values);
    }

    return (
        <>
        <h2>SignUp</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formikProps) =>(
                <From>
                    <Field name="firstName" placeholder="Type your name" />
                    <Field name="lastName" placeholder="Type your last name" />
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your password" />
                    <Field name="birthday" type="date" />
                </From>
            )}
        </Formik>
        </>
    );
}

export default SignUp;
