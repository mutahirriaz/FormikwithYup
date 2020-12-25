import React from 'react'
import { ErrorMessage, useFormik } from 'formik'
import {Formik} from 'formik'
import {Form} from 'formik'
import {Field} from 'formik'
import * as Yup from 'yup'

function FormikFormYupWithContext() {



    return (
        <div>

            <Formik initialValues={{
                name: "",
                age: 0
            }}

                onSubmit={(values) => {
                    console.log(values.name)
                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, "Must be 15 characters or less")
                            .required("name field is required"),

                        age: Yup.number()
                            .max(90, "Age should be less then 90")
                            .min(10, "Age should be greater than 20")
                            .required("age should be required")
                    })

                }
            >

                {
                    (formik)=>(
                        <Form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='name' >name: </label>
                    <Field type='input' name='name' id='name' />
                    <ErrorMessage name='name' render={(msg)=>(
                        <div style={{color: 'red'}} >{msg}</div>
                    )} />
                </div>
                <div>
                <label htmlFor='age' >age: </label>
                <Field type='number' name='age' id='age' />
                <ErrorMessage name='age' render={(msg)=>(
                    <div style={{color: 'red'}} >{msg}</div>
                )} />
                </div>
                <div>
                    <button type='submit' >Submit</button>
                </div>
            </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default FormikFormYupWithContext




// FormikFormYupWithContext
