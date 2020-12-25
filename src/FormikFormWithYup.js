import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function FormikFormWithYup() {

    const formik = useFormik({
        initialValues: {
            name: "",
            age: 0
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("name field is required"),

            age: Yup.number()
                .max(90, "Age should be less then 60")
                .min(10, "Age should be greater than 18")
                .required("age should be required")
        })

    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name ? <div style={{color: 'red'}} >{formik.errors.name}</div>: null }
                </div>
                <div>
                    <input type="number" name='age' id='age' {...formik.getFieldProps("age")} />
                    {formik.errors.age? <div style={{color: 'red'}} >{formik.errors.age}</div>: null }
                </div>
                <div>
                    <button type='submit' >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default FormikFormWithYup
