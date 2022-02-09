import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import {MdOutlinePassword} from 'react-icons/md'
import {RegisterCont1, InputWrapper,RegisterForm1, Heading1,TextSpan1,ButtonWrapper1 ,Span,ExistAccount,ButtonSubmit,InputWrapper1, Detailsform, FocusHtml, FormGroup as FormGroup1, Detailsform1} from '../../styles/register-styles'
import {DetailsForm, FocusText, FormGroup} from '../../styles/login-style'

const ForgotPass = () => {
    const validateEmailOpt = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const email = document.getElementById("email").value;
        const otp = document.getElementById("otp").value;

        document.getElementById("errorDiv").innerHTML = "";
        let count = 0;

        if (!email.match(emailReg)) {
            document.getElementById("errorDiv").innerHTML += `<div>Please Enter a valid email! </div>`;
            count += 1;
        }
        if (otp.length != 6) {
            document.getElementById("errorDiv").innerHTML += `<div>Length of OTP is not valid! </div>`;
            count += 1;
        }

    }
const iconStyle = {
    width: "1.5em",
    height: "1.5em",
};

const [otpClick, changeClick] = useState(0);
const Wrapper = {
    marginTop: "2.5em",
}
function inputChange(e) {
    if (e.target.value !== "") {
        e.target.classList.add('text');
    }
    else {
        e.target.classList.remove('text');
    }
}
    return(
        <>
    <RegisterCont1>
            <RegisterForm1>
                <Heading1>Forgot Your Password?</Heading1>
                <InputWrapper1 style={Wrapper}>
                <FormGroup>
                        <FaUserCircle className='login-field-icons' style={iconStyle} />
                        <DetailsForm type="text" id="email" name="username" onChange={inputChange} tabIndex="1" />
                        <FocusText data-placeholder="Email" />
                </FormGroup>
                </InputWrapper1>
                <InputWrapper style={{marginTop: '1em'}}>
                <FormGroup1>
                        <MdOutlinePassword className='login-field-icons' style={iconStyle}/>
                        <Detailsform1 type="text" pattern="\d*" id="otp" name="verif-code" onChange={inputChange} required maxLength={6} />
                        <FocusText data-placeholder='OTP' />
                </FormGroup1>
                <TextSpan1 id="resend_otp_verify">Resend OTP</TextSpan1>
                </InputWrapper>
                <ButtonWrapper1>
                        <ButtonSubmit name="submit" id="checkOTP" onClick={otpClick == 0 ? () => changeClick(1) : () => validateEmailOpt()}>
                            {otpClick == 0 ? "Request OTP" : "Submit"}
                        </ButtonSubmit>
                    </ButtonWrapper1>
                    <ExistAccount>
                        Already a Member? &nbsp;<Link to="/login"><Span>Sign In</Span></Link>
                    </ExistAccount>
            </RegisterForm1>
    </RegisterCont1>
    </>
    )
}

export default ForgotPass;