import React from 'react';
import {withFormik,Form,Field} from 'formik';
import * as Yup from 'yup';

 function NewUser(){
    
    return (
        <div className='user-form'>
            <Form>
                <Field type='text' name='name' placeholder='Name'/>
                <Field type='text' name='email' placeholder='Email'/>
                <Field type='password' name='password' placeholder='Password'/>
                <label className='checkbox-container'>Terms of Service
                <Field type='checkbox' name='terms' checked/>
                <span className='checkmark'/>        
                </label>
                <button type='submit'>Submit</button>
            </Form>  
        </div>
    )

}
const FormikHOC = withFormik({
    mapPropsToValues({name,email,password,terms}){
        return{
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Please enter your name."),
        email: Yup.string()
            .required("Enter your email address."),

        password: Yup.string()
            .min(6, 'Password must be at least 6 chars')
            .required("Password is required."),

        terms: Yup.bool()
            .oneOf([true], 'Terms need to be accepted.')
    }),
    

})(NewUser)

export default FormikHOC;
