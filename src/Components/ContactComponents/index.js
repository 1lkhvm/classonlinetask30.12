import React from 'react'
import { Form, Formik, Field } from 'formik'
import './style.scss'
function ContactComponents() {
    return (
        <>
             <Formik initialValues={{
                Name: "",
                Email: "",
                About: "",
                PhoneNumber: ""
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {
                    (props) => (
                        <Form className='Formdiv' id='form'>
                            <h1>Let's Get In Touch!</h1>
                            <p>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>


                            <b>Full Name:</b>
                            <Field id='form-field' name="Name" />

                            <b>Email address:</b>
                            <Field id='form-field' name="Email" type="email" />



                            <b>PhoneNumber:</b>
                            <Field id='form-field' name="PhoneNumber" type="tel" />




                            <b>Message:</b>
                            <Field id='form-field' name="About" type="textarea" />






                            <br></br>
                            <button type='sumbit'>Submit</button>

                            <div className='contact-telephone'>
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <b>+1 (555) 123-4567</b>

                            </div>
                        </Form>

                    )
                }


            </Formik>
            
        </>
    )
}

export default ContactComponents