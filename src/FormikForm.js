import React from 'react'
import {useFormik} from 'formik';

function FormikForm() {

    const formik = useFormik({
        initialValues:{
            name: "",
            age: 0
        },
        onSubmit: values =>{
            console.log(values)
        },
        validate: (values)=>{
            const errors = {}

            if(!values.name){
                errors.name= 'name is required'
            }
            else if(values.name.length >15 ){
                errors.name = 'name should be 15 characters'
            }

            return errors
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                <div>
                {formik.errors.name? <div style={{color:'red'}} >{formik.errors.name}</div>: null  }
                </div>
            </div>

            <div>
                <input type="number" id='age' name='age' onChange={formik.handleChange} value={formik.values.age} />
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
            </form>
        </div>
    )
}

export default FormikForm
