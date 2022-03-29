import React, { useState, useLayoutEffect, useEffect } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import { VscError, VscCheck } from "react-icons/vsc";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as RStyle from '../styles/register-styles';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [errordiv, changeViewDiv] = useState(0);

    const [confErrorDiv, changeConfViewDiv] = useState(0);

    const [count, setCount] = useState(0);
    const [passwordValid, setPasswordValid] = useState(false)

    let navigate = useNavigate();
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
    const [otpClick, changeClick] = useState(0);
    const [otpText, setOtpText] = useState(0);
    const [email, changeEmail] = useState("");
    const [scrollStyle, setScrollStyle] = useState({});

    //error style
    const errStyle = {
        width: '100%',
        marginTop: "0.5em",
        color: "red",
        alignText: "center",
        display: "none",
    }

    const errRegStyle = {
        marginTop: "0.2em",
        color: "red",
        display: "none"
    }

    const sStyle = {
        overflowY: "scroll",
    }

    //states for select components
    const [houseType, setHouseType] = useState({});
    const [userType, setUserType] = useState({});
    const [buttonText, setButtonText] = useState(0);
    const [readOnly, setReadOnly] = useState(false);
    const [resendOtpMessage, setResendOtpMessage] = useState(0);
    const [resendOtp, setResendOtp] = useState(0);
    const [message, setMessage] = useState(0);
    //check of key pressed on otp input is number or not
    const checkIfNumber = (e) => {
        let text = e.target.value;
        const isNumber = /\d/;
        console.log(text);

        if (!isNumber.test(text[text.length - 1])) {
            text = text.substring(0, text.length - 1);
        }
        if (text[text.length - 1] == null) {
            e.target.value = "";
        }
    }

    //validation function
    const validateEmailOtp = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const email = document.getElementById("email").value;
        const otp = document.getElementById("otp").value;
        setOtpText(0);
        document.getElementById("errorEmail").style.display = "none";
        document.getElementById("errorOtp").style.display = "none";
        let count = 0;

        if (!email.match(emailReg)) {
            document.getElementById("errorEmail").style.display = "block";
            count += 1;
        }
        if (otp.length != 6) {
            document.getElementById("errorOtp").style.display = "block";
            changeClick(0)
            count += 1;
        }

        if (count == 0) {
            changeEmail(email);
            societyRegisterStep();
        }

    }

    const CountCheck = () => {
        if (count == 5) {
            setResendOtp(0)
            setMessage(1)
            setTimeout(function () {
                setResendOtp(1)
                setMessage(0)
                setResendOtpMessage(0)
                setCount(0);
            }, 30000)
        }
        else {
            setCount(count + 1);
            setResendOtpMessage(1);
        }
    }

    const validateEmail = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const email = document.getElementById("email").value;
        document.getElementById("errorEmail").style.display = "none";
        if (!email.match(emailReg)) {
            document.getElementById("errorEmail").style.display = 'block'
        }
        else {
            document.getElementById('otp').removeAttribute("disabled");
            if (buttonText == 0) {
                setOtpText(1);
            }
            setButtonText(1);
            setTimeout(function () {
                setResendOtp(1)
                setOtpText(0)
            },
                5000);
            setReadOnly(true);
            changeClick(1);
        }

    }
    // const [userRegistration, setUserRegistration] = useState({
    //     first_name: "",
    //     last_name: "",
    //     date_of_birth: "",
    //     email: "",
    //     phone: "",
    //     phone_alt: "",
    //     house_name: "",
    //     uploaded_file: "",
    // })
    //validation for 2nd step:    
    const validateRegistration = (e) => {
        e.preventDefault();
        document.querySelectorAll('.inputGroup > span.error_message').forEach(index => { index.style.display = "none" })
        const fname = document.getElementById('fname').value
        const lname = document.getElementById("lname").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("emailNext").value;
        const phone = document.getElementById("phone1").value;
        const phoneA = document.getElementById("phone2").value;
        const houseName = document.getElementById("houseName").value;
        const file = document.getElementById("profileImage").files[0];
        let count = 0;
        const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        // const array = Array.from(inputwrapper)
        // array.forEach((item) => {
        //     item.children[2].style.display = "block";
        // })
        if (!(nameReg.test(fname)) || fname.length < 1) {
            document.getElementById('first_name_error').style.display = "inline-block"
            count += 1;
        }
        // console.log(passCheck())
        if (passwordValid) {
            console.log("submit");
        }

    }

    //const houseType=document.getElementById("houseType");
    //const userType=document.getElementById("userType");

    //regular expression for password

    //first name validation
    // const validation = () => {
    // const isNumber = /\d/;
    // if (isNumber.test(fname) || fname.length < 3) {
    //     error += "<div>Please enter valid first name!</div>";
    //     count += 1;
    // }

    // //last name validation
    // if (isNumber.test(lname) || lname.length < 3) {
    //     error += "<div>Please enter valid last name!</div>";
    //     count += 1;
    // }

    // //date of birth validation
    // if (dob < new Date().toLocaleDateString()) {
    //     console.log("error");
    //     error += "<div>Please enter valid Date of birth!</div>";
    //     count += 1;
    // }

    // //gender
    // if (document.getElementById("genMale").checked) {
    //     const gender = "male";
    // }
    // else if (document.getElementById("genFemale").checked) {
    //     const gender = "female";
    // }
    // else if (document.getElementById("genOther").checked) {
    //     const gender = "others";
    // }
    // else {
    //     console.log("please select a gender!");
    //     error += "<div>Please select your gender!</div>";
    //     count += 1;
    // }

    // if (!userType.value) {
    //     console.log("please select your user type.");
    //     error += "<div>Please select your user type!</div>";
    //     count += 1;
    // }
    // if (!houseType.value) {
    //     console.log("please select your house type.");
    //     error += "<div>Please select your house type !</div>";
    //     count += 1;
    // }

    // //houseName
    // if (isNumber.test(houseName) || houseName.length < 2) {
    //     error += "<div>Please enter valid House name!</div>";
    //     count += 1;
    // }


    // //phone number validation

    // if (!isNumber.test(phone) && phone.length != 10) {
    //     error += "<div>Please enter valid phone number!</div>";
    //     count += 1;
    // }

    // if (!isNumber.test(phoneA) && phoneA.length != 10) {
    //     error += "<div>Please enter valid alternate phone number!</div>";
    //     count += 1;
    // }

    // //password validation
    // if (!passwordReg.test(pass)) {
    //     console.log("password not valid!");
    //     error += "<div>Please enter valid password!</div>";
    //     count += 1;
    // }
    // if (pass != confPass) {
    //     error += "<div>your passwords do not match!</div>";
    //     count += 1;
    // }

    // //rent validation
    // if (document.getElementById("rented").checked) {
    //     const rent = true;
    // }
    // else if (document.getElementById("notRented").checked) {
    //     const rent = false;
    // }
    // else {
    //     error += "<div>Rent not selected!</div>";
    //     count += 1;
    // }

    // //file validation
    // const fileExt = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;

    // if (!file) {
    //     error += "<div>Please upload a file!</div>";
    //     count += 1;
    // }
    // else {
    //     if (fileExt.exec(file.name)) {
    //         error += "<div>PLease upload file with valid extension!</div>";
    //         count += 1;
    //     }
    // }

    // document.getElementById("errorDiv1").innerHTML = error;
    // if (document.getElementById("errorDiv1").innerHTML != "") {
    //     setScrollStyle(sStyle);
    // }
    // else {
    //     setScrollStyle({});
    // }

    // if (count == 0) {
    //     navigate("/login");
    // }

    // function passCheck(e) {
    //         changeViewDiv(1)
    //         // console.log(errordiv)
    //         const letterReg = /[a-z]/;
    //         const capitalReg = /[A-Z]/;
    //         const specialReg = /[!\@\#\$\%\^\&\(\)\_\+\-\.\,\;\:\\/]/;
    //         const numberReg = /[0-9]/;
    //         // let flag = 1;
    //         const input = e.target.value;
    //         const errorDiv = document.getElementById('message');
    //         // errorDiv.style.display = "block";
    //         Array.from(errorDiv.childNodes).slice(1, 6).forEach((item) => {
    //             item.children[0].style.display = "inline-block";
    //             item.children[1].style.display = "none"
    //         });
    //         // array.forEach((item) => {
    //         //     item.children[0].style.display = "inline-block";
    //         //     item.children[1].style.display = "none";
    //         // })

    //         if (letterReg.test(input)) {
    //             document.getElementById("letter").children[0].style.display = "none"
    //             document.getElementById("letter").children[1].style.display = "inline-block"
    //             // flag = 0
    //             setPasswordValid(true)
    //         }
    //         if (capitalReg.test(input)) {
    //             document.getElementById("capital").children[0].style.display = "none"
    //             document.getElementById("capital").children[1].style.display = "inline-block"
    //             // flag = 0
    //             setPasswordValid(true)

    //         }
    //         if (numberReg.test(input)) {
    //             document.getElementById("number").children[0].style.display = "none"
    //             document.getElementById("number").children[1].style.display = "inline-block"
    //             // flag = 0
    //             setPasswordValid(true)
    //         }
    //         if (input.length >= 8 && input.length < 16) {
    //             document.getElementById("length").children[0].style.display = "none"
    //             document.getElementById("length").children[1].style.display = "inline-block"
    //             // flag = 0
    //             setPasswordValid(true)
    //         }
    //         if (specialReg.test(input)) {
    //             document.getElementById("special").children[0].style.display = "none"
    //             document.getElementById("special").children[1].style.display = "inline-block"
    //             // flag = 0
    //             setPasswordValid(true)
    //         }
    //         // return flag
    // }


    function confirmPassChange(e) {
        e.target.addEventListener("blur", viewFunction);
        function viewFunction() {
            changeConfViewDiv(0)
        }
        e.target.addEventListener("input", passwordFunction);
        function passwordFunction() {
            changeConfViewDiv(1)
            let input = document.getElementById('password').value;
            let reInput = document.getElementById('confpassword').value;
            let check = document.getElementById('passCheck');
            if (reInput == input) {
                console.log(check);
                check.children[1].style.display = "inline-block";
                check.children[0].style.display = "none";
                return 1
            }
            else {
                check.children[0].style.display = "inline-block";
                check.children[1].style.display = "none";
            }
        }
    }

    const onSubmit = data => console.log(data)
    if (step === "step2") {
        return (
            <>
                <RStyle.RegisterCont1>
                    <RStyle.RegisterForm1>
                        <RStyle.Heading1>Sign Up</RStyle.Heading1>
                        <RStyle.Form>
                            <RStyle.FormGroup1>
                                <RStyle.Detailsform type="email" id="email" name="regEmail" onChange={inputChange} readOnly={readOnly} required />
                                <RStyle.FocusHtml data-placeholder='Email' />
                            </RStyle.FormGroup1>
                            <div style={errStyle} id="errorEmail">Enter a valid email</div>
                            <div id="descMessageContainer" >
                                <p style={{ fontSize: "11.5px", marginTop: "0.53em" }}>(Please enter the email to complete your registration. <b>Note</b>: The email must be verified by the Society Admin.)</p>
                            </div>
                            <RStyle.FormGroup style={{ marginBottom: '0em', marginTop: '2em' }}>
                                <RStyle.Detailsform type="text" id="otp" disabled name="verif-code" onChange={inputChange} onKeyUp={checkIfNumber} onKeyPress={checkIfNumber} required maxLength={6} />
                                <RStyle.FocusHtml data-placeholder='OTP' />
                            </RStyle.FormGroup>
                            {resendOtp == 1 ? <RStyle.TextSpan1 id="resend_otp_verify" readonly onClick={CountCheck}>Resend OTP</RStyle.TextSpan1> : null}
                            {resendOtpMessage == 1 ? <RStyle.ResendOtp id='resend_otp_message'>{message == 1 ? "Please wait for 30 seconds and try again!" : "Otp Resent Successfully!"}</RStyle.ResendOtp> : null}
                            {otpText == 1 ? <RStyle.SuccessOtp>(OTP sent)</RStyle.SuccessOtp> : null}
                        </RStyle.Form>
                        <div style={errStyle} id="errorOtp">Please Enter Otp</div>
                        <RStyle.ButtonWrapper1>
                            <RStyle.ButtonSubmit name="submit" id="checkOTP" onClick={otpClick == 0 ? () => validateEmail() : () => validateEmailOtp()}>
                                {buttonText == 0 ? "Request OTP" : "Submit"}
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
                        <RStyle.Form onSubmit={handleSubmit(onSubmit)}>
                            <div style={{ display: 'flex', flexFlow: "row wrap", justifyContent: "space-between" }}>
                                <RStyle.FormGroup className='inputGroup'>
                                    <RStyle.Detailsform
                                        type="text"
                                        id="fname"
                                        name="firstName"
                                        {...register("firstName", {
                                            required: "This field is required",
                                            minLength: 1,
                                            pattern: {
                                                value: /^[a-zA-Z]*$/,
                                                message: "Only letter allowed"
                                            },
                                            onChange: (e) => inputChange(e)
                                        })} />
                                    <RStyle.FocusHtml data-placeholder="First Name" />
                                    <RStyle.ValidationMessage>{errors.firstName?.message}</RStyle.ValidationMessage>
                                    {/* <span style={errRegStyle} id="first_name_error" className='error_message'>Invalid First Name</span> */}
                                </RStyle.FormGroup>
                                <RStyle.FormGroup className='inputGroup'>
                                    <RStyle.Detailsform type="text" id="lname" {...register("lastName", { required: true, minLength: 2 })} name="lastName" onChange={inputChange} />
                                    <RStyle.FocusHtml data-placeholder="Last Name" />
                                    {errors.lastName && (<RStyle.ValidationMessage>This field is required.</RStyle.ValidationMessage>)}
                                    {/* <span style={errRegStyle} id="last_name_error" className='error_message'>Invalid Last Name</span> */}
                                </RStyle.FormGroup>
                                <RStyle.FormGroup className='inputGroup'>
                                    <RStyle.Detailsformdate type="date" id="dob" name="dateofbirth" />
                                    <RStyle.FocusHtml data-placeholder="Date Of Birth" />
                                    <span style={errRegStyle} id="date_of_birth_error" className='error_message'>Invalid Date Of Birth</span>
                                </RStyle.FormGroup>
                                <RStyle.FormGroup className='inputGroup'>
                                    <RStyle.Detailsform type="email" id="emailNext" name="email" disabled value={email} />
                                    <RStyle.FocusHtml data-placeholder="Email" style={{ transform: 'translate(-0.4em, -2.2rem) scale(1)' }} />
                                    <span style={errRegStyle} id="email_error" className='error_message'>Invalid Email</span>
                                </RStyle.FormGroup>
                                {/* <div style={{ position: "absolute" }} id="email_error">Invalid Email</div> */}
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="phone" name="phonenum" id="phone1" maxLength="10" onChange={validateRegistration} />
                                    <RStyle.FocusHtml data-placeholder="Phone Number" />
                                    <span style={errRegStyle} id="phone_number_error">Invalid Phone Number</span>
                                </RStyle.FormGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="phone" name="altphonenum" id="phone2" maxLength="10" onChange={validateRegistration} />
                                    <RStyle.FocusHtml data-placeholder="Alternate Phone Number" />
                                    <span style={errRegStyle} id="alternate_error">Invalid Alternate Phone Number</span>
                                </RStyle.FormGroup>
                                <RStyle.FormPassGroup>
                                    <div style={{ display: "flex", alignItems: "center", borderBottom: "2px solid #000" }}>
                                        <RStyle.Detailsform style={{ borderBottom: "initial" }} type={passInputType} id="password" name="password" minLength="8" onChange={inputChange} />
                                        <RStyle.FocusHtml data-placeholder="Password" />
                                        {passInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" style={iconStyle} className="icons-eye-off" onClick={() => passInput('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => passInput('password')} />)}
                                    </div>
                                    {errordiv == 1 ? <RStyle.ErrorMessage id="message">
                                        <h4 style={{ marginBottom: "10px", fontSize: "1em" }}>Passwords must contain:</h4>
                                        <p id="letter" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>lowercase</b> letter</p>
                                        <p id="capital" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>capital (uppercase)</b> letter</p>
                                        <p id="number" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>number</b></p>
                                        <p id="special" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> A <b>special character</b></p>
                                        <p id="length" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> Length : <b>8-15</b> characters</p>
                                    </RStyle.ErrorMessage> : null}
                                    <span style={errRegStyle} id="first_name_error">Invalid Password</span>
                                </RStyle.FormPassGroup>
                                <RStyle.FormPassGroup>
                                    <div style={{ display: "flex", alignItems: "center", borderBottom: "2px solid #000" }}>
                                        <RStyle.Detailsform style={{ borderBottom: "initial" }} id="confpassword" type={confirmpassInputType} name="conf-password" minLength="8" onChange={inputChange} onInput={confirmPassChange} onBlur={() => { changeConfViewDiv(0) }} />
                                        <RStyle.FocusHtml data-placeholder='Confirm Password' />
                                        {confirmpassInputType == 'password' ? (<AiFillEyeInvisible id="pwd-off-eye" className="icons-eye-off" style={iconStyle} onClick={() => changeconfInputType('text')} />) : (<AiFillEye id="" style={iconStyle} onClick={() => changeconfInputType('password')} />)}
                                    </div>
                                    {confErrorDiv == 1 ? <RStyle.ErrorMessage1 id="messageCheck"><p id="passCheck" className="invalid"><VscError className='errorIcon' style={errorIcon} /><VscCheck className='validIcon' style={validIcon} /> Password's Match</p></RStyle.ErrorMessage1> : null}
                                    <span style={errRegStyle} id="conf_pass_error">Password Not Match</span>
                                </RStyle.FormPassGroup>
                                <RStyle.CheckGroup>
                                <RStyle.TextSpan>Gender</RStyle.TextSpan>
                                    <div style={{ display: "flex" }}>
                                        <RStyle.Checkbox type="radio" id="genMale" name="genderState" value="Male" />
                                        <RStyle.RadioLabel htmlFor="ansMale">Male</RStyle.RadioLabel>
                                        <RStyle.Checkbox type="radio" id="genFemale" name="genderState" value="female" />
                                        <RStyle.RadioLabel htmlFor="ansFemale">Female</RStyle.RadioLabel>
                                        <RStyle.Checkbox type="radio" id="genOther" name="genderState" value="other" />
                                        <RStyle.RadioLabel htmlFor="ansOther">Other</RStyle.RadioLabel>
                                    </div>
                                    <span style={errRegStyle} id="gender_error">Please Select Your Gender</span>
                                </RStyle.CheckGroup>
                                <RStyle.FormGroup>
                                    <RStyle.Detailsform type="text" name="housename" id="houseName" onChange={inputChange} />
                                    <RStyle.FocusHtml data-placeholder="House Name" />
                                    <span style={errRegStyle} id="house_name_error">Invalid House Name</span>
                                </RStyle.FormGroup>
                                <RStyle.SelectGroup>
                                <RStyle.TextSpan>House Type</RStyle.TextSpan>
                                    <Select options={houseoptions} onChange={setHouseType} />
                                    <span style={errRegStyle} id="house_type_error">Please select House Type!</span>
                                </RStyle.SelectGroup>
                                <RStyle.SelectGroup>
                                <RStyle.TextSpan>User Type</RStyle.TextSpan>
                                    <Select options={options} onChange={setUserType} />
                                    <span style={errRegStyle} id="user_type_error">Please Select User Type</span>
                                </RStyle.SelectGroup>
                                <RStyle.CheckGroup>
                                    <RStyle.TextSpan>Rented Appartment?</RStyle.TextSpan>
                                    <div style={{ display: "flex" }}>
                                        <RStyle.Checkbox type="radio" id="rented" name="rentState" value="yes" />
                                        <RStyle.RadioLabel htmlFor="ansYes">Yes</RStyle.RadioLabel>
                                        <RStyle.Checkbox type="radio" id="notRented" name="rentState" value="no" />
                                        <RStyle.RadioLabel htmlFor="ansYes">No</RStyle.RadioLabel>
                                    </div>
                                    <span style={errRegStyle} id="errorRent">Please select an option!</span>
                                </RStyle.CheckGroup>
                                <RStyle.SelectGroup>
                                <RStyle.TextSpan>Upload Profile Image</RStyle.TextSpan>
                                    <RStyle.Detailsform style={{ borderBottom: "initial" }} type="file" id="profileImage" name="file" accept="image/*" />
                                    <span style={errRegStyle} id="errorFile">Please Upload Valid File!</span>
                                </RStyle.SelectGroup>
                            </div>
                            <RStyle.ButtonWrapper>
                                <RStyle.ButtonSubmit name="submit" type="submit" >Register</RStyle.ButtonSubmit>
                            </RStyle.ButtonWrapper>
                        </RStyle.Form>
                    </RStyle.RegisterForm>
                </RStyle.RegisterCont>
            </>
        );

    }

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