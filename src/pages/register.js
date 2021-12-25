import React, { useState } from 'react'
import Select from 'react-select'
import Axios from 'axios'

import '../styles/login.css'
import { FaUserCircle } from 'react-icons/fa';
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Heading4, Heading1, RegisterCont, RegisterForm, FormGroup, InputWrapper, Detailsform, ButtonWrapper, FocusHtml, Detailsformdate, SelectGroup, TextSpan, Checkbox, CheckGroup, ButtonSubmit, RadioLabel } from '../styles/register-styles';

const Register = () => {
    // const url = ""
    // const[data,setData] = useState({
    //     fname: "",
    //     lname: "",
    //     dob: ""
    // })
    //const [step, changeStep] = useState("step1");
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

    // useEffect(() => {
    //     if (step == "step1") {
    //         console.log("step1");
    //     }
    //     else if (step == "step2") {
    //         console.log("step2");
    //     }
    // });
    // const changePass = () => {
    //     let hiddenText = document.getElementById("pass");
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
        return (
            <>
                <RegisterCont>
                    <RegisterForm>
                        <Heading1>
                            Hello, Member!
                        </Heading1>
                        <Heading4>Enter your details and start using our amazing services!</Heading4>
                        <form>
                            <InputWrapper>
                                <FormGroup>
                                    <Detailsform type="text" id="fname" required name="fname" onChange={inputChange} requried />
                                    <FocusHtml data-placeholder="First Name" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="text" id="lname" name="lname" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Last Name" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsformdate type="date" id="datepicker" name="dateofbirth" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Date Of Birth" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="email" name="email" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                        <Detailsform type="text" name="phonenum" maxLength="10" onChange={inputChange} required />
                                        <FocusHtml data-placeholder="Phone Number" />
                                </FormGroup>
                                <CheckGroup>
                                        <Checkbox type="radio" id="ansMale" name="genderState" value="Male" />
                                        <RadioLabel for="ansMale">Male</RadioLabel>
                                        <Checkbox type="radio" id="ansFemale" name="genderState" value="female" />
                                        <RadioLabel for="ansFemale">Female</RadioLabel>
                                        <Checkbox type="radio" id="ansOther" name="genderState" value="other" />
                                        <RadioLabel for="ansOther">Other</RadioLabel>
                                        <TextSpan>Gender</TextSpan>
                                </CheckGroup>
                                <FormGroup>
                                        <Detailsform type="text" name="altphonenum" maxLength="10" onChange={inputChange} />
                                        <FocusHtml data-placeholder="Alternate Phone Number" />
                                </FormGroup>
                                <SelectGroup>
                                        <Select options={options} />
                                        <TextSpan>User Type</TextSpan>
                                </SelectGroup>
                                <CheckGroup>
                                        <Checkbox type="radio" id="ansYes" name="rentState" value="yes" />
                                        <RadioLabel for="ansYes">Yes</RadioLabel>
                                        <Checkbox type="radio" id="ansNo" name="rentState" value="no" />
                                        <RadioLabel for="ansYes">No</RadioLabel>
                                        <TextSpan>Rented Appartment?</TextSpan>
                                </CheckGroup>
                                <FormGroup>
                                        <Detailsform type="text" name="housename" onChange={inputChange} />
                                        <FocusHtml data-placeholder="House Name" />
                                </FormGroup>
                                <SelectGroup>
                                        <Select options={houseoptions} />
                                        <TextSpan>House Type</TextSpan>
                                </SelectGroup>
                                <SelectGroup>
                                        <Detailsform type="file" name="file" />
                                        <TextSpan>Upload Profile Image</TextSpan>
                                </SelectGroup>
                                </InputWrapper>
                                <ButtonWrapper>
                                    <ButtonSubmit name="submit">Register</ButtonSubmit>
                                </ButtonWrapper>
                            </form>
                        </RegisterForm>
                    </RegisterCont>
                </>
            );

        // else if (step == "step1") {
        //     return (
        //         <>
        //             <div className="loginContainer">
        //                 <div className="loginForm">
        //                     <h1>
        //                         Sign In
        //                     </h1>
        //                     <div className="formGroup">
        //                         <FaUserCircle className="icons" />
        //                         <input className="details-form" type="text" id="name" name="username" onChange={inputChange} tabIndex="1" />
        //                         <span className="focus-text" data-placeholder="Email"></span>
        //                     </div>
        //                     <div className="formGroup">
        //                         <input className="details-form" type="password" id="pass" name="password" onChange={inputChange} tabIndex="2" />
        //                         <span className="focus-text" data-placeholder="Password"></span>
        //                         <AiFillLock className="icons" />
        //                         <AiFillEyeInvisible className="icons-eye-off" onClick={changePass} onFocus={changePass} tabIndex="3" />
        //                         <AiFillEye className="icons-eye-on" onFocus={changePass} onClick={changePass} />
        //                     </div>
        //                     <div className="formGroupButton">
        //                         <button name="submit" tabIndex="4">Login</button>
        //                     </div>
        //                     <div className="formGroupTwo">
        //                         <a href="/">Forgot password?</a>
        //                         <a href="/register">Sign Up!</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </>
        //     );
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

}

export default Register;