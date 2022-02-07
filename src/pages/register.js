import React, { useState, useLayoutEffect, useEffect } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import { VscError, VscCheck } from "react-icons/vsc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import * as RStyle from '../styles/register-styles';

const Register = () => {

    const [errordiv, changeViewDiv] = useState(0);



    // useLayoutEffect(()=>{
    //     const reInput = document.getElementById('confpassword');

    //     reInput.onkeydown = function () {
    //         document.getElementById('messageCheck').style.display = "block";
    //     }
    //     reInput.onblur = function () {
    //         document.getElementById('messageCheck').style.display = "none";
    //     }
    // })
    let navigate = useNavigate();
    // const url = ""
    // const[data,setData] = useState({
    //     fname: "",
    //     lname: "",
    //     dob: ""
    // })
    const [step, changeStep] = useState("step2");
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
    const [otpClick, changeClick] = useState(0);

    const [email, changeEmail] = useState("");
    const [scrollStyle, setScrollStyle] = useState({});

    //error style
    const errStyle = {
        width: '100%',
        marginTop: "-0.5em",
        color: "red",
        alignText: "center",
    }

    const sStyle = {
        overflowY: "scroll",
    }

    //states for select components
    const [houseType, setHouseType] = useState({});
    const [userType, setUserType] = useState({});

    //validation function
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

        if (count == 0) {
            changeEmail(email);
            societyRegisterStep();
        }

    }



    //validation for 2nd step:    
    const validateRegistration = () => {
        let error = "";
        let count = 0;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("emailNext").value;
        const phone = document.getElementById("phone1").value;
        const phoneA = document.getElementById("phone2").value;
        const pass = document.getElementById("password").value;
        const confPass = document.getElementById("confpassword").value;
        const houseName = document.getElementById("houseName").value;

        //const houseType=document.getElementById("houseType");
        //const userType=document.getElementById("userType");
        
        const file = document.getElementById("profileImage").files[0];

        //regular expression for password
        const passwordReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        //first name validation

        const isNumber = /\d/;
        if (isNumber.test(fname) || fname.length < 3) {
            error += "<div>Please enter valid first name!</div>";
            count += 1;
        }

        //last name validation
        if (isNumber.test(lname) || lname.length < 3) {
            error += "<div>Please enter valid last name!</div>";
            count += 1;
        }

        //date of birth validation
        if (dob < new Date().toLocaleDateString()) {
            console.log("error");
            error += "<div>Please enter valid Date of birth!</div>";
            count += 1;
        }

        //gender
        if (document.getElementById("genMale").checked) {
            const gender = "male";
        }
        else if (document.getElementById("genFemale").checked) {
            const gender = "female";
        }
        else if (document.getElementById("genOther").checked) {
            const gender = "others";
        }
        else {
            console.log("please select a gender!");
            error += "<div>Please select your gender!</div>";
            count += 1;
        }

        if (!userType.value) {
            console.log("please select your user type.");
            error += "<div>Please select your user type!</div>";
            count += 1;
        }
        if (!houseType.value) {
            console.log("please select your house type.");
            error += "<div>Please select your house type !</div>";
            count += 1;
        }

        //houseName
        if (isNumber.test(houseName) || houseName.length < 2) {
            error += "<div>Please enter valid House name!</div>";
            count += 1;
        }


        //phone number validation

        if (!isNumber.test(phone) && phone.length != 10) {
            error += "<div>Please enter valid phone number!</div>";
            count += 1;
        }

        if (!isNumber.test(phoneA) && phoneA.length != 10) {
            error += "<div>Please enter valid alternate phone number!</div>";
            count += 1;
        }

        //password validation
        if (!passwordReg.test(pass)) {
            console.log("password not valid!");
            error += "<div>Please enter valid password!</div>";
            count += 1;
        }
        if (pass != confPass) {
            error += "<div>your passwords do not match!</div>";
            count += 1;
        }

        //rent validation
        if (document.getElementById("rented").checked) {
            const rent = true;
        }
        else if (document.getElementById("notRented").checked) {
            const rent = false;
        }
        else {
            error += "<div>Rent not selected!</div>";
            count += 1;
        }

        //file validation
        const fileExt = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;

        if (!file) {
            error += "<div>Please upload a file!</div>";
            count += 1;
        }
        else {
            if (fileExt.exec(file.name)) {
                error += "<div>PLease upload file with valid extenstion!</div>";
                count += 1;
            }
        }

        document.getElementById("errorDiv1").innerHTML = error;
        if (document.getElementById("errorDiv1").innerHTML != "") {
            setScrollStyle(sStyle);
        }
        else {
            setScrollStyle({});
        }

        if (count == 0) {
            navigate("/login");
        }

    }


    function confirmPassChange() {

        if (document.getElementById("errorDiv1").innerHTML != "") {
            console.log(0);
        }



        let input = document.getElementById('password');
        let reInput = document.getElementById('confpassword');
        const check = document.getElementById('passCheck');
        if (reInput.value === input.value) {
            console.log(check);
            check.children[1].style.display = "inline-block";
            check.children[0].style.display = "none";
        }
        else {
            console.log(check);
            check.children[0].style.display = "inline-block";
            check.children[1].style.display = "none";
        }
    }
    useEffect(() => { if (errordiv == 1) { confirmPassChange() } })
}

if (step === "step1") {
    return (
        <>
            <RStyle.RegisterCont1>
                <RStyle.RegisterForm1>
                    <RStyle.Heading1>Sign Up</RStyle.Heading1>
                    <RStyle.InputWrapper1>
                        <RStyle.FormGroup1>
                            <RStyle.Detailsform type="email" id="email" name="regEmail" onChange={inputChange} required />
                            <RStyle.FocusHtml data-placeholder='Email' />
                        </RStyle.FormGroup1>
                    </RStyle.InputWrapper1>
                    <div id="descMessageContainer" >
                        <p style={{ fontSize: "11.5px", marginTop: "0.53em" }}>(Please enter the email to complete your registration. <b>Note</b>: The email must be verified by the Society Admin.)</p>
                    </div>
                    <RStyle.InputWrapper style={{ marginTop: '2em' }} id="signup_verify_email_textfield">
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="text" pattern="\d*" id="otp" name="verif-code" onChange={inputChange} required maxLength={6} />
                            <RStyle.FocusHtml data-placeholder='OTP' />
                        </RStyle.FormGroup>
                        <RStyle.TextSpan1 id="resend_otp_verify">Resend OTP</RStyle.TextSpan1>
                    </RStyle.InputWrapper>
                    <div>
                        {otpClick == 1 ? "OTP sent" : ""}
                    </div>
                    <div style={errStyle} id="errorDiv">
                    </div>
                    <RStyle.ButtonWrapper1>
                        <RStyle.ButtonSubmit name="submit" id="checkOTP" onClick={otpClick == 0 ? () => changeClick(1) : () => validateEmailOpt()}>
                            {otpClick == 0 ? "Request OTP" : "Submit"}
                        </RStyle.ButtonSubmit>
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
                <RStyle.RegisterForm style={scrollStyle}>
                    <RStyle.Heading1>
                        Hello, Member!
                    </RStyle.Heading1>
                    <RStyle.Heading4>Enter your details and start using our amazing services!</RStyle.Heading4>
                    <RStyle.InputWrapper>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="text" id="fname" required name="fname" onChange={inputChange} />
                            <RStyle.FocusHtml data-placeholder="First Name" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="text" id="lname" name="lname" onChange={inputChange} required />
                            <RStyle.FocusHtml data-placeholder="Last Name" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsformdate type="date" id="dob" name="dateofbirth" onChange={inputChange} required />
                            <RStyle.FocusHtml data-placeholder="Date Of Birth" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="email" id="emailNext" name="email" disabled onChange={inputChange} required value={email} />
                            <RStyle.FocusHtml data-placeholder="Email" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="phone" name="phonenum" id="phone1" maxLength="10" onChange={inputChange} required />
                            <RStyle.FocusHtml data-placeholder="Phone Number" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="phone" name="altphonenum" id="phone2" maxLength="10" onChange={inputChange} />
                            <RStyle.FocusHtml data-placeholder="Alternate Phone Number" />
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type={passInputType} id="password" name="password" minLength="8" required onChange={inputChange} />
                            <RStyle.FocusHtml data-placeholder="Password" />
                            {passInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" style={iconStyle} className="icons-eye-off" onClick={() => passInput('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => passInput('password')} />)}
                        </RStyle.FormGroup>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform id="confpassword" type={confirmpassInputType} name="conf-password" minLength="8" required onChange={inputChange} onBlur={() => { changeViewDiv(0) }} onKeyDown={() => { changeViewDiv(1) }} />
                            <RStyle.FocusHtml data-placeholder='Confirm Password' />
                            {confirmpassInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" className="icons-eye-off" style={iconStyle} onClick={() => changeconfInputType('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => changeconfInputType('password')} />)}
                        </RStyle.FormGroup>
                        <RStyle.CheckGroup>
                            <RStyle.Checkbox type="radio" id="genMale" name="genderState" value="Male" required />
                            <RStyle.RadioLabel htmlFor="ansMale">Male</RStyle.RadioLabel>
                            <RStyle.Checkbox type="radio" id="genFemale" name="genderState" value="female" />
                            <RStyle.RadioLabel htmlFor="ansFemale">Female</RStyle.RadioLabel>
                            <RStyle.Checkbox type="radio" id="genOther" name="genderState" value="other" />
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
                            {errordiv == 1 ? (<RStyle.ErrorMessage1 id="messageCheck"><p id="passCheck" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> Password's Match</p>
                            </RStyle.ErrorMessage1>) : (<></>)}
                        </RStyle.ErrorMessageCont>
                        <RStyle.FormGroup>
                            <RStyle.Detailsform type="text" name="housename" id="houseName" onChange={inputChange} />
                            <RStyle.FocusHtml data-placeholder="House Name" />
                        </RStyle.FormGroup>
                        <RStyle.SelectGroup>
                            <Select options={houseoptions} onChange={setHouseType} />
                            <RStyle.TextSpan>House Type</RStyle.TextSpan>
                        </RStyle.SelectGroup>

                        <RStyle.SelectGroup>
                            <Select options={options} onChange={setUserType} />
                            <RStyle.TextSpan>User Type</RStyle.TextSpan>
                        </RStyle.SelectGroup>
                        <RStyle.CheckGroup>
                            <RStyle.Checkbox type="radio" id="rented" name="rentState" value="yes" />
                            <RStyle.RadioLabel htmlFor="ansYes">Yes</RStyle.RadioLabel>
                            <RStyle.Checkbox type="radio" id="notRented" name="rentState" value="no" />
                            <RStyle.RadioLabel htmlFor="ansYes">No</RStyle.RadioLabel>
                            <RStyle.TextSpan>Rented Appartment?</RStyle.TextSpan>
                        </RStyle.CheckGroup>
                        <RStyle.SelectGroup>
                            <RStyle.Detailsform type="file" id="profileImage" name="file" accept="image/*" />
                            <RStyle.TextSpan>Upload Profile Image</RStyle.TextSpan>
                        </RStyle.SelectGroup>
                        <div style={errStyle} id="errorDiv1">
                        </div>
                    </RStyle.InputWrapper>
                    <RStyle.ButtonWrapper>
                        <RStyle.ButtonSubmit name="submit" type="submit" value="register" onClick={() => validateRegistration()}>Register</RStyle.ButtonSubmit>
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





// const onClickHandler = () => {
//     const data = new FormData()
//     data.append('file', this.state.selectFile)
// }

export default Register;