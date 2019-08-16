import React from 'react';
import {Form,Field} from 'formik';

export default function NewUser(){
    
    return (
        <div className='user-form'>
            <Form>
                <Field type='text' name='name' placeholder='Name'/>
                <Field type='text' name='email' placeholder='Email'/>
                <Field type='password' name='password' placeholder='Password'/>
                <label className='checkbox-container'>Terms of Service
                <Field type='checkbox' name='terms' check={values.terms}/>
                <span className='checkmark'/>        
                </label>
                <button type='submit'>Submit</button>
            </Form>  
        </div>
    )

}

