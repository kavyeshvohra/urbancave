import React, { useState } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom'

import { VscError, VscCheck } from "react-icons/vsc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import * as RStyle from '../styles/register-styles';

const Register = () => {
    // const url = ""
    // const[data,setData] = useState({
    //     fname: "",
    //     lname: "",
    //     dob: ""
    // })
    const [step, changeStep] = useState("step1");
    const societyRegisterStep = () => {
        changeStep("step2");
    }

    const errorIcon = {
        display: 'inline-block',
        fill: 'red'
    }
    const validIcon = {
        display: 'none',
        fill: 'green'
    }
    // const eyeOn = {
    //     display: 'unset',
    //     position: 'absolute',
    //     top: '50%',
    //     left: '90%',
    //     cursor: 'pointer',
    //     fontSize: '1.35rem',
    //     transform: 'translateY(-50%)'
    // }
    const iconStyle = {
        width: "1.5em",
        height: "1.5em",
    };
    const options = [
        { value: 'Society-Admin', label: 'Society Admin' },
        { value: 'Society-Member', label: 'Society Member' },
    ]
    const houseoptions = [
        { value: '1BHK', label: '1BHK' },
        { value: '2BHK', label: '2BHK' },
        { value: '3BHK', label: '3BHK' },
        { value: '4BHK', label: '4BHK' },
        { value: 'Other', label: 'More than 4BHK' },
    ]

    const [passInputType, passInput] = useState("password");
    const [confirmpassInputType, changeconfInputType] = useState("password");
    if (step === "step1") {
        return (
            <>
                <RStyle.RegisterCont1>
                    <RStyle.RegisterForm1>
                        <RStyle.Heading1>Sign Up</RStyle.Heading1>
                        <RStyle.InputWrapper1>
                            <RStyle.FormGroup1>
                                <RStyle.Detailsform type="email" id="usrEmail" name="regEmail" onChange={inputChange} />
                                <RStyle.FocusHtml data-placeholder='Email' />
                            </RStyle.FormGroup1>
                        </RStyle.InputWrapper1>
                        <div id="descMessageContainer" >
                            <p style={{ fontSize: "11.5px", marginTop: "0.53em" }}>(Please enter the email to complete your registration. <b>Note</b>: The email must be verified by the Society Admin.)</p>
                        </div>
                        <RStyle.InputWrapper style={{ marginTop: '2em' }} id="signup_verify_email_textfield">
                            <RStyle.FormGroup>
                                <RStyle.Detailsform type="text" id="otpField" name="verif-code" onChange={inputChange}/>
                                <RStyle.FocusHtml data-placeholder='OTP' />
                            </RStyle.FormGroup>
                            <RStyle.TextSpan1 id="resend_otp_verify">Resend OTP</RStyle.TextSpan1>
                        </RStyle.InputWrapper>
                        <RStyle.ButtonWrapper1>
                            <RStyle.ButtonSubmit name="submit" onClick={societyRegisterStep}>Request OTP</RStyle.ButtonSubmit>
                        </RStyle.ButtonWrapper1>
                        <RStyle.ExistAccount>
                            Already a Member? &nbsp;<Link to="/login"><RStyle.Span>Sign In</RStyle.Span></Link>
                        </RStyle.ExistAccount>
                    </RStyle.RegisterForm1>
                </RStyle.RegisterCont1>
            </>
        );
    }
    else {
        return (
            <>
                <RStyle.RegisterCont>
                    <RStyle.RegisterForm>
                        <RStyle.Heading1>
                            Hello, Member!
                        </RStyle.Heading1>
                        <RStyle.Heading4>Enter your details and start using our amazing services!</RStyle.Heading4>
                            <RStyle.InputWrapper>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" id="fname" required name="fname" onChange={inputChange} requried />
                                    <RStyle.FocusHtml data-placeholder="First Name" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" id="lname" name="lname" onChange={inputChange} required />
                                    <RStyle.FocusHtml data-placeholder="Last Name" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsformdate type="date" id="datepicker" name="dateofbirth" onChange={inputChange} required />
                                    <RStyle.FocusHtml data-placeholder="Date Of Birth" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="email" name="email" disabled onChange={inputChange} required />
                                    <RStyle.FocusHtml data-placeholder="Email" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" name="phonenum" maxLength="10" onChange={inputChange} required />
                                    <RStyle.FocusHtml data-placeholder="Phone Number" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" name="altphonenum" maxLength="10" onChange={inputChange} />
                                    <RStyle.FocusHtml data-placeholder="Alternate Phone Number" />
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type={passInputType} id="pwd" name="password" minLength="8" required onChange={validation} />
                                    <RStyle.FocusHtml data-placeholder="Password" />
                                    {passInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" style={iconStyle} className="icons-eye-off" onClick={() => passInput('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => passInput('password')} />)}
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform id="confpwd" type={confirmpassInputType} name="conf-password" minLength="8" required onChange={confirmPassChange} />
                                    <RStyle.FocusHtml data-placeholder='Confirm Password' />
                                    {confirmpassInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" className="icons-eye-off" style={iconStyle} onClick={() => changeconfInputType('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => changeconfInputType('password')} />)}
                                </RStyle.FormGroup>
                                <RStyle.CheckGroup>
                                    <RStyle.Checkbox type="radio" id="ansMale" name="genderState" value="Male" required />
                                    <RStyle.RadioLabel htmlFor="ansMale">Male</RStyle.RadioLabel>
                                    <RStyle.Checkbox type="radio" id="ansFemale" name="genderState" value="female" />
                                    <RStyle.RadioLabel htmlFor="ansFemale">Female</RStyle.RadioLabel>
                                    <RStyle.Checkbox type="radio" id="ansOther" name="genderState" value="other" />
                                    <RStyle.RadioLabel htmlFor="ansOther">Other</RStyle.RadioLabel>
                                    <RStyle.TextSpan>Gender</RStyle.TextSpan>
                                </RStyle.CheckGroup>
                                <RStyle.ErrorMessageCont>
                                <RStyle.ErrorMessage id="message">
                                    <h4 style={{ marginBottom: "10px", fontSize: "1em" }}>Passwords must contain:</h4>
                                    <p id="letter" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>lowercase</b> letter</p>
                                    <p id="capital" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>capital (uppercase)</b> letter</p>
                                    <p id="number" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>number</b></p>
                                    <p id="special" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>special character</b></p>
                                    <p id="length" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> Minimum <b>8 characters</b></p>
                                </RStyle.ErrorMessage>
                                </RStyle.ErrorMessageCont>
                                <RStyle.ErrorMessageCont>
                                <RStyle.ErrorMessage1 id="messageCheck">
                                    <p id="passCheck" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> Password's Match</p>
                                </RStyle.ErrorMessage1>
                                </RStyle.ErrorMessageCont>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" name="housename" onChange={inputChange} />
                                    <RStyle.FocusHtml data-placeholder="House Name" />
                                </RStyle.FormGroup>
                                <RStyle.SelectGroup>
                                    <Select options={houseoptions} />
                                    <RStyle.TextSpan>House Type</RStyle.TextSpan>
                                </RStyle.SelectGroup>
                                
                                <RStyle.SelectGroup>
                                    <Select options={options} />
                                    <RStyle.TextSpan>User Type</RStyle.TextSpan>
                                </RStyle.SelectGroup>
                                <RStyle.CheckGroup>
                                    <RStyle.Checkbox type="radio" id="ansYes" name="rentState" value="yes" />
                                    <RStyle.RadioLabel htmlFor="ansYes">Yes</RStyle.RadioLabel>
                                    <RStyle.Checkbox type="radio" id="ansNo" name="rentState" value="no" />
                                    <RStyle.RadioLabel htmlFor="ansYes">No</RStyle.RadioLabel>
                                    <RStyle.TextSpan>Rented Appartment?</RStyle.TextSpan>
                                </RStyle.CheckGroup>
                                <RStyle.SelectGroup>
                                    <RStyle.Detailsform type="file" name="file" />
                                    <RStyle.TextSpan>Upload Profile Image</RStyle.TextSpan>
                                </RStyle.SelectGroup>
                            </RStyle.InputWrapper>
                            <RStyle.ButtonWrapper>
                                <RStyle.ButtonSubmit name="submit" >Register</RStyle.ButtonSubmit>
                            </RStyle.ButtonWrapper>
                    </RStyle.RegisterForm>
                </RStyle.RegisterCont>
            </>
        );
    }
    // else
    // {
    //     let hiddenText = document.getElementById('confpwd');
    //     let iconClass = document.getElementsByClassName("icons-eye-off")[0];
    //     if (hiddenText.type == "password") {
    //         hiddenText.type = "text";
    //         iconClass.style.display = "none";
    //         document.getElementsByClassName("icons-eye-on")[0].style.display = "unset";
    //     }
    //     else {
    //         hiddenText.type = "password";
    //         iconClass.style.display = "unset";
    //         document.getElementsByClassName("icons-eye-on")[0].style.display = "none";
    //     }
    // }

    function inputChange(e) {
        if (e.target.value !== "") {
            e.target.classList.add('text');
        }
        else {
            e.target.classList.remove('text');
        }
    }
    function confirmPassChange(e) {
        inputChange(e);
        let input = document.getElementById('pwd');
        let reInput = document.getElementById('confpwd');
        const check = document.getElementById('passCheck');
        reInput.onkeydown = function () {
            document.getElementById('messageCheck').style.display = "block";
        }
        reInput.onblur = function () {
            document.getElementById('messageCheck').style.display = "none";
        }
        reInput.onkeyup = function () {
            if (reInput.value.match(input.value)) {
                check.children[1].style.display = "inline-block";
                check.children[0].style.display = "none";
            }
            else {
                check.children[0].style.display = "inline-block";
                check.children[1].style.display = "none";
            }
        }
    }
    function validation(e) {
        inputChange(e);
        let input = document.getElementById('pwd');
        const letter = document.getElementById('letter');
        const capital = document.getElementById('capital');
        const length = document.getElementById('length');
        const number = document.getElementById('number');
        const special = document.getElementById('special')

        input.onkeydown = function () {
            document.getElementById('message').style.display = "block";
        }
        input.onblur = function () {
            document.getElementById('message').style.display = "none";
        }
        input.onkeyup = function () {
            let lowerCase = /[a-z]/g;
            if (input.value.match(lowerCase)) {
                letter.children[1].style.display = "inline-block";
                letter.children[0].style.display = "none";
            }
            else {
                letter.children[0].style.display = "inline-block";
                letter.children[1].style.display = "none";
            }

            let upperCase = /[A-Z]/g;
            if (input.value.match(upperCase)) {
                capital.children[1].style.display = "inline-block";
                capital.children[0].style.display = "none";
            }
            else {
                capital.children[0].style.display = "inline-block";
                capital.children[1].style.display = "none";
            }

            let numbers = /[0-9]/g;
            if (input.value.match(numbers)) {
                number.children[1].style.display = "inline-block";
                number.children[0].style.display = "none";
            }
            else {
                number.children[0].style.display = "inline-block";
                number.children[1].style.display = "none";
            }

            let spchars = /[!-)]/g;
            if (input.value.match(spchars)) {
                special.children[1].style.display = "inline-block";
                special.children[0].style.display = "none";
            }
            else {
                special.children[0].style.display = "inline-block";
                special.children[1].style.display = "none";
            }
            if (input.value.length >= 8) {
                length.children[1].style.display = "inline-block";
                length.children[0].style.display = "none";
            }
            else {
                length.children[0].style.display = "inline-block";
                length.children[1].style.display = "none";
            }
        }

    }

    // const onClickHandler = () => {
    //     const data = new FormData()
    //     data.append('file', this.state.selectFile)
    // }
}
export default Register;