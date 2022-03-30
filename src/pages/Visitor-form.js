import React from 'react'
import { LoginForm } from '../styles/login-style'
import { Detailsform, Form, Heading1, Heading4, RegisterCont, RegisterForm, TextSpan, FormGroup } from '../styles/register-styles'

const VisitorForm = () => {
  return (
    <RegisterCont>
            <LoginForm>
                <Heading1> Hello, Visitor!</Heading1>
                <Heading4>Please fill out your details!</Heading4>
                <Form>
                     <FormGroup className='inputGroup'>
                        <TextSpan>First Name</TextSpan>
                        <Detailsform type="text" id="hname" name="visitor_fname" />
                     </FormGroup>
                </Form>
            </LoginForm>
    </RegisterCont>
  )
}

export default VisitorForm